module.exports = {
  images: {
    domains: ['assets.tina.io'],
  },
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/road-trip-po-severnim-svedsku.html',
        destination: '/blog/road-trip-po-severnim-svedsku',
        permanent: true,
      },
      {
        source: '/ostrovan-tvrdy-chleba-ma.html',
        destination: '/blog/ostrovan-tvrdy-chleba-ma',
        permanent: true,
      },
      {
        source: '/jak-se-zije-svedsky-sen.html',
        destination: '/blog/jak-se-zije-svedsky-sen',
        permanent: true,
      },
      {
        source: '/hledani-bydleni-ve-svedsku.html',
        destination: '/blog/hledani-bydleni-ve-svedsku',
        permanent: true,
      },
      {
        source: '/moje-cesta-za-zmenou-profese-aneb-z-ucitelky-softwarovym-testerem.html',
        destination: '/blog/moje-cesta-za-zmenou-profese-aneb-z-ucitelky-softwarovym-testerem',
        permanent: true,
      },
      {
        source: '/7-zajimavoti-o-svedskych-volbach.html',
        destination: '/blog/7-zajimavoti-o-svedskych-volbach',
        permanent: true,
      },
      {
        source: '/dobrovolnikem-na-euro-pride-2018.html',
        destination: '/blog/dobrovolnikem-na-euro-pride-2018',
        permanent: true,
      },
      {
        source: '/pan-a-pani-holm.html',
        destination: '/blog/pan-a-pani-holm',
        permanent: true,
      },
      {
        source: '/stockholm-z-lodi.html',
        destination: '/blog/stockholm-z-lodi',
        permanent: true,
      },
      {
        source: '/kdyz-na-svedy-prijde-jaro.html',
        destination: '/blog/kdyz-na-svedy-prijde-jaro',
        permanent: true,
      },
      {
        source: '/talar-du-svenska.html',
        destination: '/blog/talar-du-svenska',
        permanent: true,
      },
      {
        source: '/poprve-ve-svedskem-narodnim-parku.html',
        destination: '/blog/poprve-ve-svedskem-narodnim-parku',
        permanent: true,
      },
      {
        source: '/10-veci-ktere-jsem-o-svedsku-nevedel-a-ktere-me-prekvapily.html',
        destination: '/blog/10-veci-ktere-jsem-o-svedsku-nevedel-a-ktere-me-prekvapily',
        permanent: true,
      },
      {
        source: '/odjezd-a-prijezd.html',
        destination: '/blog/odjezd-a-prijezd',
        permanent: true,
      },
      {
        source: '/jak-usetrit-na-prevodu-penez-do-zahranici.html',
        destination: '/blog/jak-usetrit-na-prevodu-penez-do-zahranici',
        permanent: true,
      },
      {
        source: '/mnau-ja-jedu-taky.html',
        destination: '/blog/mnau-ja-jedu-taky',
        permanent: true,
      },
      {
        source: '/pohadka-o-nove-adrese.html',
        destination: '/blog/pohadka-o-nove-adrese',
        permanent: true,
      },
      {
        source: '/jednu-relokaci-prosim.html',
        destination: '/blog/jednu-relokaci-prosim',
        permanent: true,
      },
      {
        source: '/mesic-vypovedi',
        destination: '/blog/mesic-vypovedi',
        permanent: true,
      },
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index2.html',
        destination: '/blog/stranka/2',
        permanent: true,
      },
      {
        source: '/index3.html',
        destination: '/blog/stranka/3',
        permanent: true,
      },
      {
        source: '/index4.html',
        destination: '/blog/stranka/4',
        permanent: true,
      },
      {
        source: '/archives.html',
        destination: '/blog/archiv',
        permanent: true,
      },
      {
        source: '/tags.html',
        destination: '/tagy',
        permanent: true,
      },
      {
        source: '/categories.html',
        destination: '/kategorie',
        permanent: true,
      },
      {
        source: '/tags.html',
        destination: '/tagy',
        permanent: true,
      },
      {
        source: '/tag/:slug.html',
        destination: '/tagy/:slug',
        permanent: true,
      },
      {
        source: '/authors.html',
        destination: '/autori',
        permanent: true,
      },
      {
        source: '/author/:slug.html',
        destination: '/autori/:slug',
        permanent: true,
      },
    ]
  },
}
