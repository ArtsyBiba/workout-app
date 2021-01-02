import { forwardRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

export default function UserProfile ({ setOpen, open }) {
    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };    

    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge='start' color='inherit' onClick={handleClose} aria-label='close'>
                    <CloseIcon />
                </IconButton>
                <Typography variant='h6' className={classes.title}>
                    User Profile
                </Typography>
                <Button autoFocus color='inherit' onClick={handleClose}>
                    save changes
                </Button>
            </Toolbar>
            </AppBar>
        </Dialog>
    )
};

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
}));

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
});