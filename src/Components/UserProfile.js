import { forwardRef } from 'react';
import styled from 'styled-components';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import UserData from '../components/UserData';

export default function UserProfile ({ setOpen, open }) {
    const handleClose = () => {
        setOpen(false);
    };    

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <StyledAppBar>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
                    <CloseIcon />
                </IconButton>
                <Title>
                    User Profile
                </Title>
                <Button autoFocus color='inherit' onClick={handleClose}>
                    save changes
                </Button>
            </Toolbar>
            </StyledAppBar>
            <UserData />
        </Dialog>
    )
};

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});

const Title = styled(Typography)`
    font-size: 1.2em;
    font-weight: 600;
    flex: 1;
    margin-left: 1em;
`;

const StyledAppBar = styled(AppBar)`
    position: relative;
`;