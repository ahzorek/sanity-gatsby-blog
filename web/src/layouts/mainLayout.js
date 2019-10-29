//external packages
import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global-styles'
//import Drawer from '@material-ui/core/Drawer'
import { SnackbarProvider } from 'notistack';
//internal components and helpers
import { dark, light } from '../styles/themes'
import { PostNav, Header, Switch, DrawerBox, ReadList } from '../components'
import {isBrowser} from '../lib/helpers'
import useDark from '../lib/dark-hook'
import DarkContext from '../lib/dark-context'
import logUser from '../lib/log-user'
import SideBar from '../components/SideBar'

import '../styles/layout.css'



function Layout(props){
  //darkmode
  const [isDark, setDarkState] = useDark()
  
  //handle user info with effect
  const [user] = logUser()
  useEffect(() =>{
    console.log( user.isLoged 
      ? `User is logged with the ID ${user.id}`
      : "User is not logged, will be assigned a new ID."
    )
  }, [user])

  //drawer
  const [drawer, setDrawer] = useState(false)
  const handleDrawer = () => setDrawer(prev => !prev)

  //props
  const { children, post, navigation, hideNav } = props //global definitions
  const { nodes } = navigation ? props : false // if layout is for navigation, load navigation props
  const { title, categories, coverFormat } = post ? props : false // if layout is for post, load post props

  return (
    <ThemeProvider theme={isDark ? dark : light}>
      <DarkContext.Provider value={{isDark, setDarkState}}>
        <GlobalStyle />
          <SnackbarProvider maxSnack={3}>

            <SideBar 
              drawer={drawer} 
              handleDrawer={handleDrawer} 
              isDark={isDark}
              handleDarkMode={setDarkState}
            />
            {navigation &&(
            <Header
              nodes={nodes}
              hideNav={hideNav}
              handleDrawer={handleDrawer}
            />
            )}
            {post && (
            <PostNav
              title={title}
              category={categories[0]}
              layoutType={coverFormat}
              handleDrawer={handleDrawer}
            />
            )}
            {children && children}

          </SnackbarProvider>
      </DarkContext.Provider>
    </ThemeProvider>
  )
}
export default Layout