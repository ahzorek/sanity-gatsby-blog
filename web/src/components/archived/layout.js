//external packages
import React, { useState } from 'react'
import styled, {ThemeProvider} from 'styled-components'
import GlobalStyle from '../styles/global-styles'
import Drawer from '@material-ui/core/Drawer';
//internal components
import {dark, light} from '../styles/themes'
import {PostNav, Header, Switch, DrawerBox, ReadList} from './'
import '../styles/layout.css'

const Layout = props => {
  const stateDark = typeof window !== 'undefined' &&
    localStorage.getItem('dark__mode') !== null ?
      JSON.parse(localStorage.getItem('dark__mode')) : false
  
  const [isDark, setDark] = useState(stateDark)
  const [drawer, setDrawer] = useState(false)
  
  const {children, post, navigation} = props
    const {nodes} = navigation ? props : false
    const {title, categories, viewFormat} = post ? props : false

  const handleDarkMode = () => {
    setDark(prev => !prev)
    localStorage.setItem('dark__mode', !isDark)
  }
  const handleDrawer = () => setDrawer(prev => !prev)

  return(
    <ThemeProvider theme={isDark ? dark : light}>
      <>
        <GlobalStyle />
          <Drawer anchor="right" open={drawer} onClose={handleDrawer}>
            <DrawerBox handleDrawer={handleDrawer} >
              <Switch isOn={isDark} functionToRun={handleDarkMode}/>
              <ReadList />
            </DrawerBox>
          </Drawer>
          { navigation && <Header 
              nodes={nodes}
              mode={isDark} 
              handleDark={handleDarkMode}
              handleDrawer={handleDrawer}
            />}
          { post && <PostNav
              title={title} 
              category={categories[0]}
              layoutType={viewFormat._rawViewFormat.current}
              darkModeToggle={handleDarkMode} 
              mode={isDark}
              handleDrawer={handleDrawer}
            />}
          
          { children ? children : <div>Não há o que exibir.</div> }   
      </>
    </ThemeProvider>
  )
}
export default Layout