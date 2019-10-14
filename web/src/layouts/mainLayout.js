//external packages
import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global-styles'
import Drawer from '@material-ui/core/Drawer'
import { SnackbarProvider } from 'notistack';


//internal components and helpers
import { dark, light } from '../styles/themes'
import { PostNav, Header, Switch, DrawerBox, ReadList } from '../components/'
import '../styles/layout.css'

const Layout = props => {
  const stateDark = typeof window !== 'undefined' &&
    localStorage.getItem('dark__mode') !== null ?
    JSON.parse(localStorage.getItem('dark__mode')) : false

  const [isDark, setDark] = useState(stateDark || false)
  const [drawer, setDrawer] = useState(false)

  const { children, post, navigation, hideNav } = props
  const { nodes } = navigation ? props : false
  const { title, categories, viewFormat } = post ? props : false

  const handleDarkMode = () => {
    setDark(prev => !prev)
    localStorage.setItem('dark__mode', !isDark)
  }

  useEffect(()=> {
    window.addEventListener('storage', handleDarkMode)
    return () => {window.removeEventListener('storage', handleDarkMode)}
  },[isDark])
  
  const handleDrawer = () => setDrawer(prev => !prev)

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <>
        <GlobalStyle />
        <SnackbarProvider maxSnack={6}>
          <Drawer anchor="right" open={drawer} onClose={handleDrawer}>
            <DrawerBox handleDrawer={handleDrawer} >
              <Switch isOn={isDark} functionToRun={handleDarkMode} />
              <ReadList />
            </DrawerBox>
          </Drawer>
          {navigation &&(
            <Header
              nodes={nodes}
              mode={isDark}
              hideNav={hideNav}
              handleDark={handleDarkMode}
              handleDrawer={handleDrawer}
            />)}
          {post && (
            <PostNav
              title={title}
              category={categories[0]}
              layoutType={viewFormat._rawViewFormat.current}
              darkModeToggle={handleDarkMode}
              mode={isDark}
              handleDrawer={handleDrawer}
            />)}

          {children ? children : <div>Não há o que exibir.</div>}
        </SnackbarProvider>
      </>
    </ThemeProvider>
  )
}
export default Layout