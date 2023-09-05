# svedsko-blog

New version of my blog about moving to Sweden (content is in Czech language) accessible at
[https://svedsko.blog](https://svedsko.blog).

## Links
- [Admin panel](https://svedsko.blog/admin)
- [Tina Cloud](https://app.tina.io) 

### Cache revalidation
Because of all the pages in production are statically generated during build time, we need to revalidate the cache
whenever we edited the content through Tina.

Here are cache reset links (use only those which are applicable):
- [Revalidate cache for blog posts](https://svedsko.blog/api/revalidate?path=/blog/[slug])
- [Revalidate cache for authors](https://svedsko.blog/api/revalidate?path=/autori/[slug])
