import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import LoaderSpinner from '../components/Animation/LoaderSpinner';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';

import Icon from '../components/Toolbar/Icon';
import SignOut from '../components/Toolbar/SignOut';
import Table from '../components/Data/Table';
import User from '../components/Toolbar/User';
import DataIcon from '../components/Toolbar/DataIcon';
import UserProfile from '../components/UserProfile/index';
import { AuthUserContext, withAuthentication } from '../components/Session';

function Dashboard({ firebase, history }) {
    const [open, setOpen] = useState(false);

    const signOut = () => {
        firebase.auth.signOut()
        history.push('/');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickDataOpen = () => {
        history.push('/data');
    };

    const handleClickDashboardOpen = () => {
        history.push('/dashboard');
    };

    return (
        <AuthUserContext.Consumer>
            {authUser => authUser ? (
                <StyledPage>
                    <AppBar position='absolute'>
                        <StyledToolbar>
                            <AppName>
                                <Icon>💪 </Icon>
                                <StyledTypography 
                                    component='h1' 
                                    variant='h6' 
                                    color='inherit' 
                                    noWrap 
                                    onClick={handleClickDashboardOpen}
                                >
                                    Workout Tracker
                                </StyledTypography>
                            </AppName>
                            <IconsWrapper>
                                <IconButton color='inherit' onClick={handleClickDataOpen}>
                                    <Badge badgeContent={0} color='secondary'>
                                        <DataIcon firebase={firebase} authUser={authUser} />
                                    </Badge>
                                </IconButton>
                                <IconButton color='inherit' onClick={handleClickOpen}>
                                    <Badge badgeContent={0} color='secondary'>
                                        <User firebase={firebase} authUser={authUser} />
                                    </Badge>
                                </IconButton>
                                <IconButton color='inherit' onClick={signOut}>
                                    <Badge badgeContent={0} color='secondary'>
                                        <SignOut firebase={firebase} authUser={authUser} />
                                    </Badge>
                                </IconButton>
                            </IconsWrapper>
                        </StyledToolbar>
                    </AppBar>

                    <SyledDashboard>
                        <Table />
                    </SyledDashboard>
                    <UserProfile 
                        open={open} 
                        setOpen={setOpen} 
                        firebase={firebase} 
                        authUser={authUser}
                    />
                </StyledPage>) : (
                    <StyledPage>
                        <LoaderSpinner
                        type='ThreeDots' 
                        color='black' 
                        height={50} 
                        width={50} 
                        data-testid='loader-spinner'
                        />
                    </StyledPage>
                )
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

const StyledTypography = styled(Typography)`
    cursor: pointer;
`;

const StyledPage = styled.div`
    display: flex;
    background-color: #f5f3ed;
`;

const AppName = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const IconsWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const StyledToolbar = styled(Toolbar)`
    justify-content: space-between;
`;

export default withRouter(withAuthentication(Dashboard));