import { Header } from '@/template/components/Header'
import { Footer } from '@/template/components/Footer'

export const Layout = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main style={{ minHeight: 'calc(100vh - 235px)' }}>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
