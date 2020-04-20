import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';
import MenuIcon from '@material-ui/icons/Menu';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SpeedIcon from '@material-ui/icons/Speed';
import React from 'react';

const HeaderNav = () => {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navListItems = [
    { icon: <ChevronRightIcon />, text: '', onClick: () => toggleDrawer() },
    {
      icon: <SpeedIcon />,
      text: 'Wavelength',
      onClick: () => {
        window.location.href = '/wavelength';
      },
    },
    {
      icon: <InfoIcon />,
      text: 'About',
      onClick: () => {
        window.location.href = '/wavelength/docs';
      },
    },
    {
      icon: <MenuBookIcon />,
      text: 'Tech Spec',
      onClick: () => {
        window.location.href = '/wavelength/docs';
      },
    },
    {
      icon: <GitHubIcon />,
      text: 'GitHub',
      onClick: () => {
        window.location.href = 'https://github.com/davidhorm/wavelength';
      },
    },
  ];

  return (
    <>
      <header>
        <AppBar position="static">
          <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6">Wavelength</Typography>
            <IconButton edge="end" color="inherit" aria-label="open drawer" onClick={() => toggleDrawer()}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </header>
      <nav>
        <SwipeableDrawer anchor="right" open={drawerOpen} onOpen={() => toggleDrawer()} onClose={() => toggleDrawer()}>
          <List>
            {navListItems.map(({ icon, text, onClick }) => (
              <ListItem button key={text} onClick={onClick}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </SwipeableDrawer>
      </nav>
    </>
  );
};

export default HeaderNav;
