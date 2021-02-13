export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  // __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Describe your blog for search engines and social media.'
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Add keywords that describes your blog.',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'legal',
      type: 'text',
      title: 'Legal Text',
      description: 'Legal text that appears on the footer of every page',
    },
    {
      name: 'email',
      type: 'email',
      title: 'Stoneroad Email',
      description: 'for example info@stoneroad.org',
    },
    {
      name: 'instagram',
      type: 'url',
      title: 'Stoneroad Instagram URL',
      description: 'for example https://www.instagram.com/stoneroadfarms/',
    },
    {
      name: 'medium',
      type: 'url',
      title: 'Stoneroad Medium URL',
      description: 'for example https://stoneroad.medium.com/',
    },


  ]
}
