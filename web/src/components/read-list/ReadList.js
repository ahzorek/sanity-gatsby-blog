import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

import ListSmallNoPic from '../cards/ListSmallNoPic'

// const ReadList = () => {
//   let keys = []; for(let i = 0; i < localStorage.length; i++){ 
//     keys.push(localStorage.key(i))
//   }  
//   const readList = keys.filter(key => key.length === 36 ? true : false)

//   if (readList.length > 0){
//     return (
//       <Grid>
//         { readList.map(id => (
//           <ListSmallNoPic key={id} {...JSON.parse(localStorage.getItem(id))}/>
//         ))}
//       </Grid>
//     )
//   } else 
//   return <p>Não há items em sua lista de leitura.</p>
// }

const ReadList = () => {
  const [keys, setKeys] = useState(false)
  const [readList, setReadList] = useState([])
  
  function fillKeys(){
    setKeys(() => {
      let value = []
      for(let i = 0; i < localStorage.length; i++){ 
        value.push(localStorage.key(i))
      }
      return value
    })
  }

  function feedReadList(){
    setReadList(() => {
      if(keys !== false){
        return keys.filter(key => key.length === 36 ? true : false)
      } else return []
    })
  }

  useEffect(() => {
    window.addEventListener('storage', fillKeys)
    return () => {
      window.removeEventListener('storage', fillKeys)
    }
  },[])

  useEffect(() => {
    fillKeys()
  },[])

  useEffect(() => {
    feedReadList()
  },[keys])

  //let readList = keys !== false && keys.filter(key => key.length === 36 ? true : false)

  if (readList.length > 0){
    return (
      <Grid>
        { readList.map(id => {
          //console.log(id)
          return (
            <ListSmallNoPic key={id} {...JSON.parse(localStorage.getItem(id))}/>
            // <div>hi</div>
          )
        })}
      </Grid>
    )
  } else 
  return <p>Não há items em sua lista de leitura.</p>
}

const Grid = styled.ul`
  display: grid;
  grid-gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
`
export default ReadList
