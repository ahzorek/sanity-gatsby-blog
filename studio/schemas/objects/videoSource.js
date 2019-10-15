// videoSource.js
export default {
    name: 'videoSource',
    type: 'object',
    title: 'Video Incorporado',
    fields: [
      {
        name: 'url',
        type: 'url',
        title: 'URL do video (YouTube, Facebook, Vimeo, Twitch, Streamable, Wistia, DailyMotion)'
      },
      {
        name: 'videoFullWidth',
        type: 'boolean',
        title: 'Exibir video na largura total da página?'
      }
    ]
  }