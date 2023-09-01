// credits: https://themeforest.net/item/qurno-minimal-blog-nextjs-template/36625633

import Menu from '@/config/menus.json'
import siteConfig from '@/config/site.config.json'
import { IconMenu2, IconX } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  useEffect(() => {
    // sticky header
    let nav = document.querySelector('.header-nav')
    let lastKnownScrollY = 0
    let currentScrollY = 0
    const classes = {
      pinned: 'header-nav-pinned',
      unpinned: 'header-nav-unpinned',
    }
    let stickyNavigation = () => {
      if (window.scrollY >= 150) {
        nav.classList.add('header-sticky-top')
      } else {
        nav.classList.remove('header-sticky-top')
      }
    }
    let navbarPinUnpin = () => {
      currentScrollY = window.pageYOffset
      if (currentScrollY < lastKnownScrollY) {
        pin()
      } else if (currentScrollY > lastKnownScrollY) {
        if (window.scrollY >= 400) {
          unpin()
        }
      }
      lastKnownScrollY = currentScrollY
    }
    let pin = () => {
      if (nav.classList.contains(classes.unpinned)) {
        nav.classList.remove(classes.unpinned)
        nav.classList.add(classes.pinned)
      }
    }
    let unpin = () => {
      if (nav.classList.contains(classes.pinned) || !nav.classList.contains(classes.unpinned)) {
        nav.classList.remove(classes.pinned)
        nav.classList.add(classes.unpinned)
      }
    }
    // navbar interactions
    window.onscroll = () => {
      navbarPinUnpin()
      stickyNavigation()
    }
  }, [])

  return (
    <>
      <div className="header-height-fix"></div>
      <header className="header-nav">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="navbar navbar-expand-lg navbar-light p-0">
                <Link href="/" className="navbar-brand font-weight-bold d-flex mb-0">
                  <Image
                    className="img-fluid"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: 200, height: 'auto' }}
                    src={siteConfig.logo}
                    alt={siteConfig.logoText}
                    placeholder="blur"
                    blurDataURL={siteConfig.logo}
                  />
                </Link>

                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navHeader"
                  aria-controls="navHeader"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="d-inline">
                    <IconMenu2 size={32} />
                  </i>
                  <i className="d-none">
                    <IconX size={32} />
                  </i>
                </button>

                <div className="collapse navbar-collapse" id="navHeader">
                  <ul className="navbar-nav mx-auto">
                    {Menu.mainMenu.map((n, i) => (
                      <li key={i} className={`nav-item ${pathname == `${n.link}` ? `active` : ''}`}>
                        <Link href={n.link} className="nav-link">
                          {n.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export { Header }
