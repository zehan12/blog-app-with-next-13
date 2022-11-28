import './globals.css'
import './reset.css'
import Header from './header'
import Footer from './footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <script>var Alert = ReactBootstrap.Alert;</script>
      <body>
        <Header />
        {children}
      </body>
      <Footer />
    </html>
  )
}
