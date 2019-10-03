import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'

const AuthorsList = styled.ul`
  display: block;
  width: max-content;
  list-style: none;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
`
const AuthorBox = styled.li`
  display: flex;
  flex-flow: row wrap;
  margin: .5rem 0;
  & a {
    color: inherit;
    text-decoration: none;
    line-height: 10px;
  }

`
const Avatar = styled.div`
  display: inline-block;
  width: 35px;
  height: 35px;
  background: transparent;
  border-radius: 50px;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: .85;
  ${AuthorBox}:hover & {
      opacity: 1;
    }
  }
`
const Name = styled.span`
  display: inline;
  margin: 0 1rem;
  padding: 0;
  line-height: 35px;
  vertical-align: middle; 
  /* vertical-align: top;
  margin-top: 25px;
  transform: translateY(-50%); */

`

const Author = ({items}) => {
  return (
    <AuthorsList>
      {items.map(({author, _key}) => {
        const authorName = author && author.name
        const authorPhoto = author && imageUrlFor(buildImageObj(author.image)).width(100).height(100).fit('crop').url()
        return (
          <AuthorBox key={_key} >
            <Link to={`/autores/${author.slug.current}`}>
              <Avatar>
                <img src={authorPhoto} alt={authorName}/>
              </Avatar>
              </Link>
              <Link to={`/autores/${author.slug.current}`}>
                <Name>{authorName}</Name>
              </Link>
          </AuthorBox>
        )
      })}
    </AuthorsList>
  )
}

export default Author