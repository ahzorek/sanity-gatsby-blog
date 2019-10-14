import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import {buildImageObj, cn, getBlogUrl} from '../../lib/helpers'
import {imageUrlFor} from '../../lib/image-url'
import {minQueries} from '../../lib/media'
import DisplayDate from '../displayDate'
import Author from '../author'
import PortableText from '../portableText'

import styles from '../blog-post-preview.module.css'

function ListMediumPic(props) {
  const { title, slug, mainImage, _rawExcerpt, publishedAt, isUpdated, _updatedAt, authors } = props
  const imgSrc = mainImage && 
    mainImage.asset && 
      imageUrlFor(buildImageObj(mainImage))
        .width(600).height(Math.floor((3 / 4) * 600)).auto('format').url()
  return (
    <ListItem>
        <Link style={{display: 'contents'}} to={getBlogUrl(publishedAt, slug.current)}>
          {mainImage && mainImage.asset && ( <Image src={imgSrc} alt={mainImage.alt}/> )}
        </Link>
        <PostInfo>
          <Link style={{display: 'contents'}} to={getBlogUrl(publishedAt, slug.current)}>
            <Title>{title}</Title>
            {_rawExcerpt && <Excerpt><PortableText blocks={_rawExcerpt} /></Excerpt>}
          </Link>
          <DateWrapper>
            <DisplayDate dateInfo={{ publishedAt, isUpdated, _updatedAt }} />
          </DateWrapper>
          <Author style={{fontSize: '10pt'}} items={authors}/>
        </PostInfo>
    </ListItem>
  )
}
const ListItem = styled.li`
  display: flex;
  flex-flow: column wrap;
  border-top: solid 1px ${props => props.theme.defaults.color_light_gray};
  padding: 2rem 0 0;
  & :last-of-type {
    padding-bottom: 2rem;
    border-bottom: solid 1px ${props => props.theme.defaults.color_light_gray};
  }
  & a {
    color: ${props => props.theme.primaryText};
    &:hover {
      color: ${props => props.theme.link};
    }
  }
`
const Image = styled.img`
  flex-basis: 1;
  object-fit: cover;
`

const PostInfo = styled.div`
  flex-basis: 2;
  padding: 0 0 0 1.2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const Title = styled.h3`
  font-size: calc(.8rem + 1.4vw);
  margin: 1rem 0 0.5rem;
  line-height: 1.5;
  width: 100%;
`
const Excerpt = styled.section`
  display: none;
  margin: 0.5em 0;
  @media ${minQueries.Md}{
    display: block;
    width: 100%;
  }
`
const DateWrapper = styled.div`
  font-size: 10pt;
  color: ${props => props.theme.defaults.color_gray};
`
export default ListMediumPic
