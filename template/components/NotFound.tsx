// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import Link from 'next/link'

const NotFound = () => (
  <section className="section-sm pb-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <h1 className="page-not-found-title">404</h1>
            <p className="mb-4">Bohužel, tato stránka neexistuje. Zadali jste správnou adresu?</p>
            <Link href="/" className="btn btn-primary">
              Zpátky na hlavní stránku
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export { NotFound }
