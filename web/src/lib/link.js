import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

export const Link = ({to, color, children}) => {
  return (
    <AniLink 
      paintDrip 
      duration={.6} 
      to={to} 
      hex={color !== undefined ? color : '#323232'}
      >
      {children}
    </AniLink>

  )
}