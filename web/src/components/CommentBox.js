import React, {useState} from 'react'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
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
  const [props, set, stop] = useSpring(() => ({
    opacity: 1,
    transform: 'scaleY(1)'

  }))

  const url = `https://hibernativos.ml${getBlogUrl(publishedAt, slug.current)}`

  const handleCommentBox = () => {
    toggleBox(true)
  }


  return (
    <Wrapper>
        <animated.div style={props}>
          <ExpandButton disabled={commentBox} onClick={(e) => {
            setTimeout(() => {
              set({opacity: 0, transform: 'scaleY(0)'})
                setTimeout(handleCommentBox, 600)
            }, 400)
          }}>
            Mostrar Comentários 
          </ExpandButton>
        </animated.div>      
      {commentBox && <Disqus style={{transition: 'all 400ms ease-in'}} config={{url, identifier, title}} />}
    </Wrapper>

  )
}

export default CommentBox
