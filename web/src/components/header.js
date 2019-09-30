import React from 'react'
import styled from 'styled-components'
import {Link} from '../lib/link'
import Icon from './icon'
import Logo from '../images/logo.js'
//import {cn} from '../lib/helpers'
import styles from './header.module.css'

const HeaderBox = styled.header`
  width: 100%;
  top: 0;
  z-index: 100;
  /* border: dashed 2px green; */
`
const Flexer = styled.section`
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 960px;
  padding: 2em 1em;
  display: flex;
  /* border: dashed 2px red; */
`

const Header = props => (
  <HeaderBox>
    <Flexer>
      <div className={styles.branding}>
        <Link to='/' color={'#232323'}><Logo color={"#202020"} /></Link>
      </div>

      <button className={styles.toggleNavButton}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={styles.showNav}>
      </nav>
    </Flexer>
  </HeaderBox>
)

export default Header
