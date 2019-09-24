import React, {Fragment} from 'react'
import { createGlobalStyle } from 'styled-components'
//import Header from './header'
import '../styles/layout.css'
import styles from './layout.module.css'

const GlobalStyle = createGlobalStyle`
  @import '../styles/custom-fonts.css';
`
const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: {regex: "/(drafts.|)siteSettings/"}) {
      title
    }
  }
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => {
  return(
    <Fragment>
      <GlobalStyle />
      {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
              
      <div className={styles.content}>
        {children}
      </div>
  
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}></div>
      </footer>
    </Fragment>
  )
}

export default Layout
