// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import Link from 'next/link'
import Image from 'next/image'

const NotFound = () => (
  <section className="section-sm pb-0">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <Image
              className="img-fluid"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 300, height: 'auto' }}
              src="/404.svg"
              alt="404"
              placeholder="empty"
            />
            <p className="mb-4 mt-4">
              Bohužel, tato stránka neexistuje. Zadali jste správnou adresu?
            </p>
            <Link href="/" className="btn btn-primary mt-4">
              Zpátky na hlavní stránku
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export { NotFound }
