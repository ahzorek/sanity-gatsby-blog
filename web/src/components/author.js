import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import {Avatar} from '@material-ui/core/';


const AuthorsList = styled.ul`
  list-style: none;
  padding: 0;
  /* margin-block-start: 0;
  margin-block-end: 0; */
`
const AuthorBox = styled.li`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  & a {
    color: inherit;
    text-decoration: none;
  }

`
const Name = styled.span`
  padding: 0 1rem 0 10px;
`
const Author = ({items, style, hidePic, prefix = 'por'}) => {
  return (
    <AuthorsList>
      {items.map(({author, _key}) => {
        const authorName = author && author.name
        const authorPhoto = author && imageUrlFor(buildImageObj(author.image)).width(100).height(100).fit('crop').url()

        return (
          <AuthorBox style={style} key={_key} >
            <i>{prefix}  </i>
            {!hidePic && (
              <Link to={`/autores/${author.slug.current}`}>
                <Avatar style={{width: 30, height: 30, margin: '0px 0px 0px 10px'}} src={authorPhoto} alt={authorName}/>
              </Link> )}
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