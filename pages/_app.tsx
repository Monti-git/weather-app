import '../styles/globals.css'
import { wrapper } from 'store/store'
import type { AppProps } from 'next/app'
import Layout from 'components/layout'
import "antd/dist/antd.css";


function MyApp({ Component, pageProps }: AppProps) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}
export default wrapper.withRedux(MyApp)
