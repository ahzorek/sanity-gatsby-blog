import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import Logo from '../images/logo.js'

//import {cn} from '../lib/helpers'

import styles from './header.module.css'

const Header = ({siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'><Logo name={siteTitle} color={"#202020"} /></Link>
      </div>

      <button className={styles.toggleNavButton}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={styles.showNav}>
        <ul className={styles.branding}>
          <li>
            <Link to='/archive/'>Arquivo</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
