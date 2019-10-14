import React from 'react'
import styled from 'styled-components'

import ListSmallNoPic from '../cards/ListSmallNoPic'

const ReadList = () => {
  let keys = []; for(let i = 0; i < localStorage.length; i++){ 
    keys.push(localStorage.key(i))
  }  
  const readList = keys.filter(key => key.length === 36 ? true : false)

  if (readList.length > 0){
    return (
      <Grid>
        { readList.map(id => (
          <ListSmallNoPic key={id} {...JSON.parse(localStorage.getItem(id))}/>
        ))}
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
