import React from 'react'
import styled from 'styled-components'

const TopHeadline = ({node}) => {
  console.log(node)
  const colors = node.categories.map(c => c.color.rgb)

  const {r, g, b, a} = colors[0]
  const linearGradient = `linear-gradient(to bottom, rgba(${r},${g},${b},${a}), transparent)`

  return (
    <Box color={`rgba(${r},${g},${b},${a})`} gradient={linearGradient}>
      <Title>{node.title}</Title>
    </Box>
  )
}

const Box = styled.header`
  width: 100%;
  height: 60vh;
  /* background-color: ${props => props.color}; */
  background: ${props => props.gradient};
`
const Title = styled.h1`
  margin: 0;
  font-size: calc(1.6rem + 1.2vw);
`

export default TopHeadline