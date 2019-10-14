import React from "react"
import styled from 'styled-components'
import { Link } from "gatsby"
import { connectHits, Highlight } from "react-instantsearch-dom"
import { minQueries } from "../../lib/media"
const placeholderImg = {
  alt: 'Placeholder',
  Src: 'https://via.placeholder.com/150'
}
const Hit = ({ hits }) => (
  <List>
    { hits.map(hit => {
      const {objectID, link, image = placeholderImg} = hit
      return (
        <ListItem key={objectID}>
          <Link to={`/${link}`}>
            <Image src={hit.image.Src} alt={image.alt} />
            <Title><Highlight attribute="title" hit={hit} tagName="mark" /></Title>
          </Link>
        </ListItem>
      )
    })}
  </List>
)
const Hits = connectHits(Hit)

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  & > * {
    height: max-content;
  }
`
const Image = styled.img`
  width: 100%;
  @media ${minQueries.Sm}{
    max-width: 40%;
    object-fit: cover;
  }
`

const ListItem = styled.li`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  border-top: solid 1px ${props => props.theme.defaults.color_light_gray};
  padding: 1rem 0;
  & :last-of-type {
    border-bottom: solid 1px ${props => props.theme.defaults.color_light_gray};
  }
  & a {
    display: contents;
    color: ${props => props.theme.primaryText};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.link};
    }
  }
  @media ${minQueries.Sm}{
    flex-flow: row nowrap;
  }
`
const Title = styled.h3`
  font-size: calc(.8rem + 1vw);
  margin: 1rem 0 0.5rem;
  padding: 0;
  line-height: 1.5;
  @media ${minQueries.Sm}{
    padding: 0 1.4rem;
  }
`

export default Hits