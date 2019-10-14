import React from 'react'
import styled from 'styled-components'
//import BlogPostPreview from './blog-post-preview'
import {Link} from '../lib/link'
import {Button} from '@material-ui/core'

import ListMediumPic from './cards/ListMediumPic'
import Container from '../containers/container__1024'
//import styles from './blog-post-preview-list.module.css'

const BlogPostPreviewList = ({title, subTitle, nodes, hideCat, browseMoreHref, loadMore}) => (
  <Container>
    {title && <LargeTitle>{title}</LargeTitle> }
    {subTitle && <SubTitle>{subTitle}</SubTitle> }
    <List>
      {nodes && nodes.map(node => (
        <ListMediumPic key={node.id} {...node}/>
      ))}
    </List>
    { browseMoreHref && <Link to={browseMoreHref}>Ver mais</Link> }
    { loadMore && <Button onClick={loadMore}>Carregar Mais Artigos</Button> }
  </Container>
)

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  list-style: none;
  & > * {
    margin: 2rem 0 0;
    width: 100%;
    height: max-content;
  }
`
const LargeTitle = styled.h2`
  font-size: calc(1.4rem + 2vw);
  margin: 1.2rem 0 0;
  padding: 0;
`
const SubTitle = styled.h3`
  font-size: calc(.8rem + 1vw);
  margin: .6rem 0 0;
  padding: 0;
`

BlogPostPreviewList.defaultProps = {
  title: '',
  subTitle: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewList
