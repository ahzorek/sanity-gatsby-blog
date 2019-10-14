import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
//import {Link} from 'gatsby'

export const Link = ({to, color = 'rgb(128,128,128)', children}) => (
    <AniLink fade duration={.6} to={to} >
      {children}
    </AniLink>
  )