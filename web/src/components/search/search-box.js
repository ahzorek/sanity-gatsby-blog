import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import { connectSearchBox } from 'react-instantsearch-dom';

const CustomSearch = ({ currentRefinement, refine, startValue }) => {
  const [myQuery, setQuery] = useState(startValue)
  
  const sendQuery = (event) => {
    event.preventDefault()
    refine(myQuery)
  }
  
  useEffect(() => {
    startValue !== false && refine(myQuery)
  }, [startValue])

  useEffect(() => {
    history.pushState({}, null, `busca?tag=${myQuery}`)
    document.title = myQuery !== '' 
      ? `Buscando por: ${myQuery} | Hibernativos`
      : `Busca | Hibernativos`
  }, [myQuery])

  useEffect(() => {
    myQuery === '' &&
      refine(myQuery)
  }, [myQuery])

  return (
    <form onSubmit={sendQuery} role="search">
      <Input
        type="search"
        placeholder="Busca"
        value={myQuery}
        onChange={e => setQuery(e.target.value)}
      />
    </form>
  )
}
const SearchBox = connectSearchBox(CustomSearch)

const Input = styled.input`
  border: 1px solid rgba(0,0,0,.05);
  outline: none;
  padding: 1rem 2rem;
  margin: 2rem auto;
  font-size: 2rem;
  border-radius: 1.5rem;
  width: 100%;
  background-color: ${props => props.theme.contrastBg};
  color:${props => props.theme.primaryText};
  transition: all 200ms ease;
  &:hover, :focus,:active {
    box-shadow: 0 4px 12px 0 rgba(0,0,0,.05);
    transition: all 200ms ease;
    border: 1px solid ${props => props.theme.defaults.blue_algolia};
  }
`

export default SearchBox