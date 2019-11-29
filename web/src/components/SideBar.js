import React, {useContext} from 'react'
import Drawer from '@material-ui/core/Drawer'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { DarkContext } from '../lib/dark-mode'
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

function SideBar({drawer, handleDrawer}){
    const {isDark, setDarkState} = useContext(DarkContext);
    return (
      <ThemeProvider theme={drawerTheme}>
        <Drawer anchor="left" open={drawer} onClose={handleDrawer}>
          <DrawerBox handleDrawer={handleDrawer} >
            <Switch isOn={isDark} functionToRun={setDarkState} />
            <ReadList />
          </DrawerBox>
        </Drawer>
      </ThemeProvider>
    )
}

export default SideBar