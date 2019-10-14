import React, {useState} from 'react'
import styled from 'styled-components'
import { Disqus } from 'gatsby-plugin-disqus'
import {getBlogUrl} from '../lib/helpers'
import {Button} from '@material-ui/core'

const ExpandButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 1rem 4rem;
  background-color: ${props => props.theme.contrastPlus};
  color: ${props => props.theme.primaryText};
  margin: 0 auto;
  font-weight: 100;
`
const Wrapper = styled.div`
  height: max-content;
  padding: 3rem calc(calc(100vw - 960px)/2);
  /* background-color: ${props =>  props.theme.contrastPlus}; */
`
const CommentBox = ({id: identifier, title, publishedAt, slug}) => {
  const [commentBox, toggleBox] = useState(false)
  const url = `https://hibernativos.ml${getBlogUrl(publishedAt, slug.current)}`

  const handleCommentBox = () => {
    toggleBox(prev => !prev)
  }


  return (
    <Wrapper>
      {!commentBox && 
        <ExpandButton 
          onClick={e => setTimeout(handleCommentBox, 1000)}
          >
            Mostrar Comentários 
        </ExpandButton>
      }
      
      {commentBox && <Disqus config={{url, identifier, title}} />}
    </Wrapper>

  )
}

export default CommentBox
