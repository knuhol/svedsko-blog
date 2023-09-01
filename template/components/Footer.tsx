// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import Link from 'next/link'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="py-5">
          <div className="row">
            <div className="col-lg-12 text-center">
              <p className="mb-0 copyright-text content">
                (ɔ) Knut Holm 2017-{new Date().getFullYear()} • Obsah je chráněn licencí{' '}
                <Link href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.cs">
                  CC BY-NC-SA 4.0
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
