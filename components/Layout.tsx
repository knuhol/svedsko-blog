import { Header } from '@/template/Components/Header'
import { Footer } from '@/template/Components/Footer'

export const Layout = (props) => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
