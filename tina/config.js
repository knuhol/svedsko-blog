import { defineConfig, defineSchema } from 'tinacms'

const schema = defineSchema({
  collections: [
    {
      label: 'Authors',
      name: 'authors',
      path: 'content/author',
      fields: [
        {
          name: 'body',
          label: 'About author',
          type: 'rich-text',
          isBody: true,
        },
        {
          type: 'string',
          label: 'Name',
          name: 'name',
        },
        {
          type: 'string',
          label: 'Image',
          name: 'image',
        },
        {
          type: 'string',
          label: 'Gender',
          name: 'gender',
        },
        {
          type: 'string',
          label: 'Summary',
          name: 'summary',
        },
        {
          type: 'string',
          label: 'Facebook',
          name: 'facebook',
        },
        {
          type: 'string',
          label: 'LinkedIn',
          name: 'linkedin',
        },
        {
          type: 'string',
          label: 'GitHub',
          name: 'github',
        },
        {
          type: 'string',
          label: 'StackOverflow',
          name: 'stackoverflow',
        },
        {
          type: 'string',
          label: 'Web',
          name: 'web',
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/autori/${document._sys.filename}`
        },
      },
    },
    {
      label: 'Blog Posts',
      name: 'post',
      path: 'content/post',
      fields: [
        {
          type: 'string',
          label: 'Title',
          name: 'title',
        },
        {
          type: 'datetime',
          label: 'Date',
          name: 'date',
        },
        {
          type: 'string',
          label: 'Category',
          name: 'category',
        },
        {
          type: 'string',
          label: 'Tags',
          name: 'tags',
        },
        {
          type: 'string',
          label: 'Author',
          name: 'author',
        },
        {
          type: 'string',
          label: 'Summary',
          name: 'summary',
        },
        {
          type: 'string',
          label: 'Image',
          name: 'image',
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/blog/${document._sys.filename}`
        },
      },
    },
  ],
})

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
    process.env.HEAD, // Netlify branch env
  token: process.env.TINA_TOKEN,
  media: {
    // If you wanted cloudinary do this
    // loadCustomStore: async () => {
    //   const pack = await import("next-tinacms-cloudinary");
    //   return pack.TinaCloudCloudinaryMediaStore;
    // },
    // this is the config for the tina cloud media store
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
  build: {
    publicFolder: 'public', // The public asset folder for your framework
    outputFolder: 'admin', // within the public folder
  },
  schema,
})

export default config
