import React from 'react'
import Dialog from 'part:@sanity/components/dialogs/fullscreen'
import ReactGiphySearchbox from 'react-giphy-searchbox'

export default function GIPHYSearch(props){
	const handleSelect = (item) => {
    props.onSelect([{
        kind: 'url',
        value: item.images.preview_gif.url,
        assetDocumentProps: {
          id: item.id,
          originalFilename: item.slug,
          source: {
           name: item.url,
           url: item.url
          },
          description: item.title,
          rating: item.rating
        }
      }]
    )
  }

  return (
    <Dialog 
    	style={{padding: 10}} 
    	title="Encontre o seu GIF ideal!"
    	onClose={props.onClose}
    	isOpen
    >
    	<ReactGiphySearchbox
		    apiKey="UahO1or6wdwKjby6GUkcBm5LOEz4o2nc"
		    rating="R"
		    searchPlaceholder="Buscar"
		    masonryConfig={[{ columns: 3, imageWidth: 180, gutter: 10 }]}
		    onSelect={item => {
          handleSelect(item)
          console.log(item)
        }}
		  />
    </Dialog>
  )
}