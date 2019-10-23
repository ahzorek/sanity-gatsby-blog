import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Switch, DrawerBox, ReadList } from './'

const drawerTheme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        background: 'transparent',
        boxShadow: 'none'
      },
    },
  },
});

function SideBar({drawer, handleDrawer, isDark, handleDarkMode}){
    return (
      <ThemeProvider theme={drawerTheme}>
        <Drawer anchor="left" open={drawer} onClose={handleDrawer}>
          <DrawerBox handleDrawer={handleDrawer} >
            <Switch isOn={isDark} functionToRun={handleDarkMode} />
            <ReadList />
          </DrawerBox>
        </Drawer>
      </ThemeProvider>
    )
}

export default SideBar