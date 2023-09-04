import { defineConfig, defineSchema } from 'tinacms'

// TODO: Add support for <pre> tag
const schema = defineSchema({
  collections: [
    {
      label: 'Authors',
      name: 'authors',
      path: 'content/author',
      fields: [
        {
          type: 'string',
          label: 'Name',
          name: 'name',
          ui: {
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
        },
        {
          type: 'image',
          label: 'Image',
          name: 'image',
          ui: {
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
        },
        {
          type: 'datetime',
          label: 'Last update',
          name: 'lastUpdate',
          ui: {
            component: 'date',
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
          },
        },
        {
          type: 'string',
          label: 'Gender',
          name: 'gender',
          ui: {
            component: 'select',
            options: ['male', 'female'],
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
        },
        {
          type: 'string',
          label: 'Summary',
          name: 'summary',
          ui: {
            component: 'textarea',
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
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
        {
          name: 'body',
          label: 'About author',
          type: 'rich-text',
          isBody: true,
          ui: {
            validate: (value) => {
              if (value === undefined || value.children[0]?.children[0]?.text === '') {
                return 'This field is mandatory'
              }
            },
          },
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/autori/${document._sys.filename}`
        },
        beforeSubmit: ({ values }) => ({ ...values, lastUpdate: new Date().toISOString() }),
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
          ui: {
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
        },
        {
          type: 'datetime',
          label: 'Date',
          name: 'date',
          ui: {
            component: 'date',
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
          },
        },
        {
          type: 'datetime',
          label: 'Last update',
          name: 'lastUpdate',
          ui: {
            component: 'date',
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
          },
        },
        {
          type: 'string',
          label: 'Category',
          name: 'category',
          ui: {
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
        },
        {
          type: 'string',
          label: 'Tags',
          name: 'tags',
          list: true,
          ui: {
            component: 'tags',
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'You need to add at least one tag'
              }
            },
          },
        },
        {
          type: 'string',
          label: 'Author',
          name: 'author',
          ui: {
            component: 'select',
            options: ['Knut Holm', 'Tereza Holm'],
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
        },
        {
          type: 'string',
          label: 'Summary',
          name: 'summary',
          ui: {
            component: 'textarea',
            validate: (value) => {
              if (value === undefined || value.length === 0) {
                return 'This field is mandatory'
              }
            },
          },
        },
        {
          type: 'image',
          label: 'Image',
          name: 'image',
        },
        {
          type: 'rich-text',
          label: 'Blog Post Body',
          name: 'body',
          isBody: true,
          ui: {
            validate: (value) => {
              if (value === undefined || value.children[0]?.children[0]?.text === '') {
                return 'This field is mandatory'
              }
            },
          },
        },
      ],
      ui: {
        router: ({ document }) => {
          return `/blog/${document._sys.filename}`
        },
        beforeSubmit: ({ values, form }) =>
          form.crudType === 'create'
            ? {
                ...values,
                date: new Date().toISOString(),
                lastUpdate: new Date().toISOString(),
                image: values.image === undefined ? '/uploads/no-picture.svg' : values.image,
              }
            : {
                ...values,
                lastUpdate: new Date().toISOString(),
                image: values.image === undefined ? '/uploads/no-picture.svg' : values.image,
              },
      },
    },
  ],
})

export const config = defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch:
    process.env.NEXT_PUBLIC_TINA_BRANCH ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD,
  token: process.env.TINA_TOKEN,
  media: {
    tina: {
      publicFolder: 'public',
      mediaRoot: 'uploads',
    },
  },
  build: {
    publicFolder: 'public',
    outputFolder: 'admin',
  },
  schema,
})

export default config
