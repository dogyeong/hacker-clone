import Head from 'next/head'
import style, { global } from './style'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout({
  children,
  title = 'Hacker Clone',
  description = 'Hacker News Clone made with Next.js',
  backButton = false,
}) {
  return (
    <React.Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>

      <Header backButton={backButton} />

      <div className="container">
        <main className="main">{children}</main>
      </div>

      <Footer />

      <style jsx global>
        {global}
      </style>
      <style jsx>{style}</style>
    </React.Fragment>
  )
}
