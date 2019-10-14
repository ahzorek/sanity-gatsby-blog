import {graphql, StaticQuery} from 'gatsby'
import React from 'react'

const ContainerStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    border: '13pt red solid'
}

function ErrorLayout (props) {
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
          <ContainerStyle>
              {children}
          </ContainerStyle>
        )
      }}
    />
  )
}

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
  }
`

export default ErrorLayout