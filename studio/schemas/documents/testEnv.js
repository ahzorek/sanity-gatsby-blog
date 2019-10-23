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
      }
    ]
  }