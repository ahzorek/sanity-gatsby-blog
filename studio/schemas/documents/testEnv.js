import GIPHY from "part:sanity-plugin-asset-source-giphy/image-asset-source"
import Default from 'part:@sanity/form-builder/input/image/asset-source-default'


export default {
    name: 'testEnv',
    type: 'document',
    title: 'Testes',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Nome',
      },
      {
        name: "editorialState",
        type: "string",
        options: {
          list: [
            { title: "Needs review", value: "review" },
            { title: "Awaiting publication", value: "awaiting" },
            { title: "Published", value: "published" }
          ],
          layout: "checkbox"
        }
      },
      {
        name: 'giphy',
        title: 'GIFS',
        type: 'image',
        options: {
          sources: [GIPHY, Default]
        }
      },
      {
        name: 'editorialFunction',
        type: 'array',
        of: [ {type: 'string'} ],
        options: {
          list: [
            { title: 'Building', value: 'building' },
            { title: 'Master plan', value: 'masterPlan' },
            { title: 'Infrastructure', value: 'infrastructure' },
            { title: 'Private Home', value: 'privateHome' }
          ],
          layout: 'grid'
        }
      }
    ]
  }