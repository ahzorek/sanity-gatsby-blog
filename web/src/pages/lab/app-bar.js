import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import * as MenuIcon from 'react-ionicons/lib/IosMenu'
import TvReview from '../../components/TvReview'
import MovieReview from '../../components/MovieReview'
import styled from 'styled-components'

import Layout from '../../layouts/mainLayout'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function appBar() {
  const classes = useStyles();

  return (
    <Layout>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <TvReview node={{id: 1396, rating: 10}}/>
      <MovieReview node={{id: 475557, rating: 10}}/>
      <Spinner />
    </Layout>
  );
}

const Spinner = styled.div`
  margin: 5rem auto;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left: solid 15px red;
  border-right: solid 15px red;
  transition: all 500ms ease;
  outline-offset: 12px;
  &:hover {
    border-top: solid 10px black;
    border-bottom: solid 10px black;
    transition: all 500ms ease;
  }
`