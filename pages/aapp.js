import App, { Container } from 'next/app'
import Router from 'next/router'
import { useState } from 'react'
import LoadingContext from '../lib/loadingContext'

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)

  Router.onRouteChangeStart = (url) => setIsLoading(true)
  Router.onRouteChangeComplete = () => setIsLoading(false)

  return (
    <Container>
      <LoadingContext.Provier value={{ isLoading }}>
        <Component {...pageProps} />
      </LoadingContext.Provier>
    </Container>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext)

  return { ...appProps }
}
