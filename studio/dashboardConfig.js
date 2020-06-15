export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee7236b2dff36bcb8e1cfcc',
                  title: 'Sanity Studio',
                  name: 'sanity-oystein-studio',
                  apiId: '9b8737ba-2ec7-4214-840a-873eaac22520'
                },
                {
                  buildHookId: '5ee7236bcaf7f79db90bc0b3',
                  title: 'Landing pages Website',
                  name: 'sanity-oystein',
                  apiId: '355a05c5-e9d0-4395-b7fc-7636773ca2f5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/webar2007/sanity-oystein',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-oystein.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
