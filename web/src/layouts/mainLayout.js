//external packages
import React, { useState, createContext } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global-styles'
import Drawer from '@material-ui/core/Drawer'
import { SnackbarProvider } from 'notistack';
//internal components and helpers
import { dark, light } from '../styles/themes'
import { PostNav, Header, Switch, DrawerBox, ReadList } from '../components'
import {isBrowser} from '../lib/helpers'
import useDark from '../lib/dark-hook'
import DarkContext from '../lib/dark-context'

import '../styles/layout.css'

const Layout = props => {
  //darkmode
  const [isDark, setDark] = useDark()
  const handleDarkMode = () => setDark(prev => !prev)

  //drawer
  const [drawer, setDrawer] = useState(false)
  const handleDrawer = () => setDrawer(prev => !prev)

  //props
  const { children, post, navigation, hideNav } = props //global definitions
  const { nodes } = navigation ? props : false // if layout is for navigation, load navigation props
  const { title, categories, viewFormat } = post ? props : false // if layout is for post, load post props

  return (
    <ThemeProvider theme={isDark ? dark : light}>
    <DarkContext.Provider value={{isDark, handleDarkMode}}>
    <GlobalStyle />
    <SnackbarProvider maxSnack={3}>
          <Drawer anchor="right" open={drawer} onClose={handleDrawer}>
            <DrawerBox handleDrawer={handleDrawer} >
              <Switch isOn={isDark} functionToRun={handleDarkMode} />
              <ReadList />
            </DrawerBox>
          </Drawer>
          {navigation &&(
            <Header
              nodes={nodes}
              hideNav={hideNav}
              handleDrawer={handleDrawer}
              mode={isDark}
            />
          )}
          {post && (
            <PostNav
              title={title}
              category={categories[0]}
              layoutType={viewFormat._rawViewFormat.current}
              handleDrawer={handleDrawer}
            />
          )}
          {children ? children : <div>Não há o que exibir.</div>}
    </SnackbarProvider>
    </DarkContext.Provider>
    </ThemeProvider>
  )
}
export default Layout