module.exports = {
  // TODO: Add redirects from old blog + fix links in posts
  async rewrites() {
    return [
      {
        source: '/admin',
        destination: '/admin/index.html',
      },
    ]
  },
}
