import NProgress from 'nprogress';
import Router from 'next/router';
import Page from '../components/Page';

// "_app" a Next.js thing for when you want to go higher then Page component
// You need to give it "Component", "pageProps" as props
// https://nextjs.org/docs/advanced-features/custom-app

import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
