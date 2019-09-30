import React, { useState } from 'react'
import styled from 'styled-components'

import '../../styles/layout.css'

const Input = styled.input`
  font-family: BWHaasGrotesk;
  margin: 0 !important;
  padding: 2rem 3rem;
  background: #f5f5f5;
  font-size: 4em;
`

const handleValue = e => setValue(e.target.value)


const Lab = props => {
  const [name, setName] = useState('Andre')
  const [age, setAge] = useState(27)
  const [names, setNames] = useState([])
    
  const addName = (e) => {
    e.preventDefault()
    setNames([...names, {name, age}])
  }

  return (
    <div style={{color: 'white'}}>
      <h1>Testing useState "more deeply"</h1>
      <form onSubmit={addName}>
        <Input type="text" onChange={e => console.log(e.target.value)}/>
        <Input type="number" onChange={e => console.log(e.target.value)} />
        <Input type="submit" value="submit"/>
      </form>
    </div>
  )
}

export default Lab