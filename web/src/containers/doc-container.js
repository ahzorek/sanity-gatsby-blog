import {graphql, StaticQuery} from 'gatsby'
import React, {useState} from 'react'
import { createGlobalStyle } from 'styled-components'
import Layout from '../components/layout'

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'BWHaasGrotesk';
      src: url('../fonts/BWHaasGrotesk-55Roman.woff2') format('woff2'),
      url('../fonts/BWHaasGrotesk-55Roman.woff') format('woff'),
      url('../fonts/BWHaasGrotesk-55Roman.eot') format('eot');
      font-style: normal;
      font-weight: 500; 
      font-display: fallback; 
    }

  @font-face {
      font-family: 'BWHaasGrotesk';
      src: url('../fonts/BWHaasGrotesk-75Bold.woff2') format('woff2'),
      url('../fonts/BWHaasGrotesk-75Bold.woff') format('woff');
      font-style: normal;
      font-weight: 700;  
      font-display: fallback;
  }
  @font-face {
      font-family: 'BWHaasGrotesk';
      src: url('../fonts/BWHaasGrotesk-95Black.woff2') format('woff2'),
      url('../fonts/BWHaasGrotesk-95Black.woff') format('woff');
      font-style: normal;
      font-weight: 900;  
      font-display: fallback;
  }
`
const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
  }
`

function DocContainer (props) {
  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the Studio at http://localhost:3333 and some content in "Site settings"'
          )
        }
        return (
          <Layout
            {...props}
            siteTitle={data.site.title}
          />
        )
      }}
    />
  )
}

export default DocContainer
