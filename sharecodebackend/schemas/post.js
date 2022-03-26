export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'codeBlock',
      title: 'Code Block',
      type: 'code',
      options: {
        theme: 'solarized_dark',
        language: 'js',
        languageAlternatives: [
          { title: 'Javascript', value: 'js' },
          { title: 'HTML', value: 'html' },
          { title: 'CSS', value: 'css' },
          { title: 'SASS', value: 'sass' },
        ]
      }
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      },
    },
    // {
    //   name: 'author',
    //   title: 'Author',
    //   type: 'reference',
    //   to: { type: 'author' },
    // },
    {
      name: 'user',
      title: 'Author',
      type: 'reference',
      to: { type: 'user' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      // author: 'author.name',
      author: 'user.name',
      media: 'mainImage',
    },
    // prepare(selection) {
    //   const { author } = selection
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`,
    //   })
    // },
    prepare(selection) {
      const { user } = selection
      return Object.assign({}, selection, {
        subtitle: user && `by ${user}`,
      })
    },
  },
}
