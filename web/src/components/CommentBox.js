import React, {useState} from 'react'
import styled from 'styled-components'
import { Disqus } from 'gatsby-plugin-disqus'
import {getBlogUrl} from '../lib/helpers'

const Wrapper = styled.div`
  height: max-content;
  /* min-height: ${props => props.commentBox ? '600px' : '0px'}; */
  padding: 6rem calc(calc(100vw - 960px)/2);
  margin: 6rem auto;
`
const Button = styled.button`
  display: block;
  width: 400px;
  margin: auto;
  border: none;
`
const CommentBox = ({id: identifier, title, publishedAt, slug}) => {
  const [commentBox, toggleBox] = useState(false)
  const handleCommentBox = e => toggleBox(true)
  const url = `https://hibernativos.ml${getBlogUrl(publishedAt, slug.current)}`

  return (
    <Wrapper commentBox={commentBox}>
      {!commentBox && 
        <Button onClick={handleCommentBox}>Mostrar Comentários </Button>
      }
      
      {commentBox && <Disqus config={{url, identifier, title}} />}
    </Wrapper>

  )
}

export default CommentBox
