import Link from 'next/link';
import { css } from '@emotion/react';
// -> no error message, compiled successfully when:
// import type {} from '@emotion/react/types/css-prop';
// -> error message: Can't resolve '@emotion/react/types/css-prop' when:
// import {} from '@emotion/react/types/css-prop';

const headerStyles = css`
  justify-content: space-between;
  border-radius: 10px;
  background-color: #645e49;
  color: #fff;
`;

export default function Header() {
  return (
    // When neither of the imports exist from lines 4 and 6, there is this error on this element:
    // TypeScript warning: Type '{ children: Element; css: SerializedStyles; }' is not assignable to type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
    // Property 'css' does not exist on type 'DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>'.
    <header css={headerStyles}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/search">
            <a>Search</a>
          </Link>
        </li>
        <li>
          {' '}
          <Link href="/dashboard/my-list">
            <a>List</a>
          </Link>
        </li>
        <li>
          <Link href="/logout">
            <a>Logout</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
