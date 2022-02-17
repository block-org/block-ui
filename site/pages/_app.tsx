import type { AppProps } from 'next/app'
import Menu from '../lib/components/layout/menu'
import '../styles/globals.css'
// todo
import "@arco-design/web-react/dist/css/arco.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Menu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
