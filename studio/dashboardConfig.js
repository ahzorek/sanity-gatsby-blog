export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d645b1084ba3e01875421c1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-onpxarq7',
                  apiId: '849263ca-8391-4328-918d-6330e74e21c1'
                },
                {
                  buildHookId: '5d645b1050a7c6018c36d479',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-rz54g4t2',
                  apiId: '42a3f18e-eaee-4f3d-8781-5b26f76f294b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ahzorek/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-rz54g4t2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
