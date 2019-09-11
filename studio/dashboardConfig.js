export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
    //   }
    // },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'ATENÇÃO: Como o Gatsby é um gerador de sites estáticos, a cada publicação efetiva deverá ser rodada uma nova *deploy* do Hibernativos. Isso pode ser feito pelo botão abaixo.',
              sites: [
                {
                  buildHookId: '5d645b1084ba3e01875421c1',
                  title: 'Sanity Studio',
                  name: 'hibernativos-studio',
                  apiId: '849263ca-8391-4328-918d-6330e74e21c1'
                },
                {
                  buildHookId: '5d645b1050a7c6018c36d479',
                  title: 'Hibernativos',
                  name: 'hibernativos',
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
          {title: 'Frontend', value: 'https://hibernativos.ml', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Postagens recentes', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
