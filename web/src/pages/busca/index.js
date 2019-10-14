import React from 'react'
import Search from '../../components/search/search'
import Layout from '../../layouts/mainLayout'
import getAllUrlParams from '../../lib/urlParams'
import  Container from '../../containers/container_960'
import SEO from '../../components/seo'
import styled from 'styled-components'

const IndexBusca = () => {
  const Tag = typeof document !== 'undefined' &&
    getAllUrlParams(document.URL).tag !== '' ?
      getAllUrlParams(document.URL).tag : ''

  return (
    <Layout navigation hideNav>
      <SEO title={'Busca'}/>
      <Container>
        <LargeTitle>Busca</LargeTitle>
        <Search index={`Artigos`} startValue={Tag} />
      </Container>
    </Layout>
  )
}

const LargeTitle = styled.h2`
  font-size: calc(1.4rem + 2vw);
  margin: 1.2rem 0 0;
  padding: 0;
`

export default IndexBusca
