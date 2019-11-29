import React from 'react'
import Dialog from 'part:@sanity/components/dialogs/fullscreen'
import ReactGiphySearchbox from 'react-giphy-searchbox'

export default function GIPHYSearch(props){
	const handleSelect = (item) => {
    props.onSelect([{
        kind: 'url',
        value: item.images.preview_gif.url,
        assetDocumentProps: {
          originalFilename: item.slug, // Use this filename when the asset is saved as a file by someone.
          source: {
            // The source this image is from 
           name: 'giphy.com/gifs/',
           // A string that uniquely idenitfies it within the source.
           // In this example the URL is the closest thing we have as an actual ID.
           id: item.id
          },
          description: item.title,
        }
      }]
    )
  }

  return (
    <Dialog 
    	style={{padding: 10}} 
    	title="Selecione um GIF"
    	onClose={props.onClose}
    	isOpen
    >
    	<ReactGiphySearchbox
		    apiKey="UahO1or6wdwKjby6GUkcBm5LOEz4o2nc"
		    rating="R"
		    searchPlaceholder="Buscar"
		    masonryConfig={[{ columns: 3, imageWidth: 120, gutter: 5 }]}
		    style={{padding: '10px 0'}}
		    onSelect={item => handleSelect(item)}
		  />
    </Dialog>
  )
}