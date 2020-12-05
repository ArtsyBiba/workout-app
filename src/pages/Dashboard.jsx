import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import moment from 'moment';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../config/theme.dashboard';
import Copyright from '../components/Copyright';
import Sidebar from '../components/Sidebar';
import Calendar from '../components/Calendar';
import User from '../components/User';
import { AuthUserContext, withAuthentication } from '../components/Session';

function Dashboard(props) {
    const classes = useStyles();

    const {firebase} = props;

    const [open, setOpen] = useState(true);
    const [date, setDate] = useState(moment());
  
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    const signOut = () => {
      props.firebase.auth.signOut()
      props.history.push('/');
    }

    return (
        <AuthUserContext.Consumer>
        {authUser => authUser ? (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position='absolute' className={clsx(classes.appBar, open && classes.appBarShift)}>
                    <Toolbar className={classes.toolbar}>
                        <IconButton
                            edge='start'
                            color='inherit'
                            aria-label='open drawer'
                            onClick={handleDrawerOpen}
                            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                        >
                            <MenuIcon />
                        </IconButton>
                            <Typography component='h1' variant='h6' color='inherit' noWrap className={classes.title}>
                                Dashboard
                            </Typography>
                        <IconButton color='inherit'>
                            <Badge badgeContent={0} color='secondary'>
                                <User firebase={firebase} authUser={authUser} />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Sidebar 
                    signOut={signOut} 
                    open={open} 
                    handleDrawerClose={handleDrawerClose} 
                />

                <main className={classes.content, !open ? classes.contentClosed : classes.appBarShift }>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth='xl' className={classes.container}>
                        <Calendar 
                            firebase={firebase} 
                            authUser={authUser}
                            date={date}
                            setDate={setDate} 
                        />
                        <Box pt={4}>
                            <Copyright />
                        </Box>
                    </Container>
                </main>
                
            </div>
            ) : (<p>Not authorized.</p>)
        }
    </AuthUserContext.Consumer>
  );
};

export default withRouter(withAuthentication(Dashboard));