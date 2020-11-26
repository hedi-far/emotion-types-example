import Head from 'next/head';
import Layout from '../components/Layout';
import { css } from '@emotion/react';

const landingPage = css`
  background-color: red;
  & .grid {
    grid-template-columns: 55% 45%;
  }
`;

const paragraphStyles = css`
  background-color: green;
  width: 700px;
  height: 300px;
  grid-column-start: 1;
  grid-column-end: 1;
  /* grid-row-start: row1-start;
  grid-row-end: 3; */
`;

export default function Home() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Welcome!</title>
        </Head>
        <main>
          <h1>Welcome to Neatify!</h1>
          <div css={landingPage}>
            <p css={paragraphStyles}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet.
            </p>
          </div>
        </main>
      </Layout>
    </div>
  );
}
