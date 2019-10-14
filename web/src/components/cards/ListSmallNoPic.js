import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { buildImageObj, cn, getBlogUrl } from '../../lib/helpers'
import { imageUrlFor } from '../../lib/image-url'
import { minQueries } from '../../lib/media'
import DisplayDate from '../displayDate'
import PortableText from '../portableText'

function ListSmallNoPic(props) {
  const { title, slug, publishedAt, isUpdated, _updatedAt, } = props

  return (
    <ListItem>
      <Link style={{ display: 'contents' }} to={getBlogUrl(publishedAt, slug.current)}>
        <Title>{title}</Title>
      </Link>
      <DateWrapper>
        <DisplayDate dateInfo={{ publishedAt, isUpdated, _updatedAt }} />
      </DateWrapper>
    </ListItem>
  )
}
const ListItem = styled.li`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  border-top: solid 1px ${props => props.theme.defaults.color_light_gray};
  & :last-of-type {
    padding-bottom: 2rem;
    border-bottom: solid 1px ${props => props.theme.defaults.color_light_gray};
  }
  & a {
    color: ${props => props.theme.primaryText};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.link};
    }
  }
`
const Title = styled.h3`
  font-size: calc(.8rem + .4vw);
  margin: 1rem 0 0.5rem;
  line-height: 1.5;
  width: 100%;
`

const DateWrapper = styled.div`
  font-size: 10pt;
  color: ${props => props.theme.defaults.color_gray};
`
export default ListSmallNoPic
