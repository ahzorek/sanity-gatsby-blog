import React, { Component } from 'react'
import Header from './header'

import '../styles/layout.css'
import styles from './layout.module.css'

//CLASS COMPONENT

class Layout extends Component {
  state = {
    darkMode: false,
    fontSize: 14
  }

  handleDarkMode = () => {
    this.setState({ darkMode: !this.state.darkMode })
    localStorage.setItem('dark__mode', !this.state.darkMode)
    // console.log(localStorage.getItem('dark__mode'))
    }
  biggerFont = () => {
    this.state.fontSize < 24 && this.setState({fontSize: this.state.fontSize + 2})
    localStorage.setItem('font__size', this.state.fontSize + 2)
  }
  smallerFont = () => {
    this.state.fontSize > 12 && this.setState({fontSize: this.state.fontSize - 2})
    localStorage.setItem('font__size', this.state.fontSize)
  }

  componentDidMount(){
    localStorage.getItem('dark__mode') &&
      // console.log(localStorage.getItem('dark__mode'))
      this.setState({ darkMode: JSON.parse(localStorage.getItem('dark__mode')) })
    localStorage.getItem('font__size') &&
      this.setState({fontSize: parseInt(localStorage.getItem('font__size'))})

  }

  render() {

    const {children, onHideNav, onShowNav, showNav, siteTitle} = this.props
    const { darkMode, fontSize } = this.state

    const myFont = `${fontSize.toString()}px`
    return(
      <>
        {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
                
        <div className={styles.content}>
          {children}
        </div>
    
        <footer className={styles.footer}>
          <div className={styles.footerWrapper}>
            <button onClick={(a) => this.handleDarkMode()}>The Darkmode</button>
            <button disabled={this.state.fontSize === 24 ? true : false} onClick={(b) => this.biggerFont()}>Font ++</button>
            <button disabled={this.state.fontSize === 10 ? true : false} onClick={(c) => this.smallerFont()}>Font --</button>

            <div className={styles.siteInfo} style={{fontSize: myFont}}>
              &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
              &amp;
              {` `}
              <a href='https://www.gatsbyjs.org'>Gatsby</a>
            </div>
          </div>
        </footer>
      </>
    )
  }
}


export default Layout
