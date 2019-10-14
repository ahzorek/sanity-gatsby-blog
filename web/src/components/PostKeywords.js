import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import Chip from '@material-ui/core/Chip'

import SlugiFy from '../lib/slugs'
import Container from '../containers/container_960'


const PostKeywords = ({ items }) => (
  <Container>
    {items.length > 0 && <h4>Este artigo foi marcado como</h4>}
    <TagBlock>
      {items.map((keyword, index) => (
        <li style={{dislay: 'inline-block'}} key={keyword+index}>
          <Link style={{textDecoration: 'none'}} to={`/busca?tag=${SlugiFy(keyword)}`} ><Tag label={keyword}/></Link>
        </li>
      ))}
    </TagBlock>
  </Container>
)
const Tag = styled(Chip)`
  background-color: ${props => props.theme.contrastPlus};
  color: ${props => props.theme.primaryText};
  cursor: pointer;
  &:hover{
    background-color: ${props => props.theme.contrastBg};
  }
`

const TagBlock = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;
  justify-content: flex-start;
  flex-flow: row wrap;
  list-style: none;
  & > * {
    margin: 10px;
    list-style: none;
  }
`

export default PostKeywords 
