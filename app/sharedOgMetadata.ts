import siteConfig from '@/config/site.config.json'

const sharedOgMetadata = {
  images: [siteConfig.metaData.ogImage],
  url: siteConfig.baseURL,
  title: siteConfig.metaData.title,
  description: siteConfig.metaData.description,
  siteName: siteConfig.metaData.title,
  locale: 'cs_CZ',
  type: 'website',
  tags: [siteConfig.metaData.keyword]
}

export { sharedOgMetadata }
