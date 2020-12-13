import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import useStyles from '../config/theme.dashboard';
import Copyright from '../components/Copyright';
import User from '../components/User';
import SignOut from '../components/SignOut';
import WorkoutStatsBoard from '../components/WorkoutStatsBoard';
import { AuthUserContext, withAuthentication } from '../components/Session';
import CalendarContainer from '../components/CalendarContainer';

function Dashboard(props) {
    const classes = useStyles();

    const {firebase} = props;

    const signOut = () => {
        props.firebase.auth.signOut()
        props.history.push('/');
    };

    return (
        <AuthUserContext.Consumer>
            {authUser => authUser ? (
                <StyledPage>
                    <AppBar position='absolute'>
                        <Toolbar>
                            <Typography 
                                component='h1' 
                                variant='h6' 
                                color='inherit' 
                                noWrap 
                                className={classes.title}
                            >
                                💪 Workout Tracker
                            </Typography>
                            <IconButton color='inherit'>
                                <Badge badgeContent={0} color='secondary'>
                                    <User firebase={firebase} authUser={authUser} />
                                </Badge>
                            </IconButton>
                            <IconButton color='inherit' onClick={signOut}>
                                <Badge badgeContent={0} color='secondary'>
                                    <SignOut firebase={firebase} authUser={authUser} />
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
    margin-top: 4em;
`;

const StyledPage = styled.div`
    display: 'flex';
    background-color: #f5f3ed;
`;

export default withRouter(withAuthentication(Dashboard));