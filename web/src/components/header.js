import {Link} from '../lib/link'
import React from 'react'
import Icon from './icon'
import Logo from '../images/logo.js'
//import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/' color={'#232323'}><Logo name={siteTitle} color={"#202020"} /></Link>
      </div>

      <button className={styles.toggleNavButton}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={styles.showNav}>
      </nav>
    </div>
  </div>
)

export default Header
