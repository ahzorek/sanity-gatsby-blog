import React from 'react'
import styled from 'styled-components'
import TrendingUpRoundedIcon from '@material-ui/icons/TrendingUpRounded';

import {Link} from '../lib/link'
import { minQueries, maxQueries } from '../lib/media';

const NavMenu = ({ nodes }) => {
  let categories
  if(nodes !== undefined) {
    categories = nodes.flatMap(node => node.categories)
      .reduce((a,b) => {
        const isRepeated = a.find(item => item.slug.current === b.slug.current)
        if (isRepeated) { return a } 
        else return a.concat([b])
      },[])
  } else { 
    categories = null;
    console.error(`Há um problema com os 'nodes' recebidos: ${nodes}`) 
  }
  
  return (
    <Wrapper>
      <TrendingUpRoundedIcon fontSize="large"/>
      <LinkWrapper>
        {categories !== null && categories.slice(0,4).map((category, index) => (
          <li title={`Mais em ${category.title}`} key={'link__',index} style={{listStyle: 'none'}}>
            <Link color={category.color ? category.color.hex : 'rgb(128,128,128'} to={`/${category.slug.current}/`}>
              {category.title}
            </Link>
          </li>
        ))}
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  flex-flow: collumn wrap;
  justify-content: space-evenly;
  align-items: center;
  font-size: 10pt;
  text-transform: uppercase;
  @media ${maxQueries.Md} {
    display: none;
  }
`
const LinkWrapper = styled.ul`
  /* @media ${maxQueries.Lg} { 
    & li :last-of-type {
      display: none;
    }
  } */
  display: contents;
  width: auto;
  &:hover {
    & a {
      color: ${props => props.theme.opacityText3};
    }
  }
  & a {
    color: ${props => props.theme.primaryText};
    transition: all 300ms ease-in;
    padding: .8rem .6rem;
    text-decoration: none;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    &:hover {
      color: ${props => props.theme.primaryText};
      transition: all 500ms ease-in;
    }
  }
`
export default NavMenu;
