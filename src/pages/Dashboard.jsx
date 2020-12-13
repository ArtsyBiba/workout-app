import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';

import useStyles from '../config/theme.dashboard';
import Copyright from '../components/Copyright';
import Sidebar from '../components/Sidebar';
import User from '../components/User';
import WorkoutStatsBoard from '../components/WorkoutStatsBoard';
import { AuthUserContext, withAuthentication } from '../components/Session';
import CalendarContainer from '../components/CalendarContainer';

function Dashboard(props) {
    const classes = useStyles();

    const {firebase} = props;

    const [open, setOpen] = useState(false);
  
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    const signOut = () => {
      props.firebase.auth.signOut()
      props.history.push('/');
    };

    return (
        <AuthUserContext.Consumer>
            {authUser => authUser ? (
                <StyledPage>
                    <AppBar 
                        position='absolute' 
                        className={classes.appBar}
                    >
                        <Toolbar className={classes.toolbar}>
                            <Typography 
                                component='h1' 
                                variant='h6' 
                                color='inherit' 
                                noWrap 
                                className={classes.title}
                            >
                                💪 Dashboard
                            </Typography>
                            <IconButton color='inherit'>
                                <Badge badgeContent={0} color='secondary'>
                                    <User firebase={firebase} authUser={authUser} />
                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                    <SyledDashboard>
                        <CalendarContainer 
                            firebase={firebase} 
                            authUser={authUser}
                        />
                        <WorkoutStatsBoard
                            firebase={firebase} 
                            authUser={authUser}
                        />
                        <Copyright />
                    </SyledDashboard>
                </StyledPage>) : (<p>Not authorized.</p>)
            }
        </AuthUserContext.Consumer>
    );
};

const SyledDashboard = styled.div`
    display: flex;
	flex-direction: column;
    justify-content: space-evenly;
    width: 90%;
    margin: auto;
    margin-top: 5.5em;
`;

const StyledPage = styled.div`
    display: 'flex',
`;

export default withRouter(withAuthentication(Dashboard));