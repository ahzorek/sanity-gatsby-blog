import React from 'react'

//import Header from './header'
import '../styles/layout.css'
import styles from './layout.module.css'

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => {
  return(
    <>
      {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
              
      <div className={styles.content}>
        {children}
      </div>
  
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
        </div>
      </footer>
    </>
  )
}

export default Layout
