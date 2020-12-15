import React, {useState} from 'react';
import styled from 'styled-components';

import HelpIcon from '@material-ui/icons/Help';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
}));

export default function InstructionsIcon (props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <>
            <StyledHelpIcon
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            />
            <Popover
                id='mouse-over-popover'
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
        >
            <PopupText>
                {props.text}
            </PopupText>
        </Popover>
      </>
    )
};

const StyledHelpIcon = styled(HelpIcon)`
    font-size: 1.2em;
    padding-left: 5px;
    padding-top: 5px;
`;

const PopupText = styled.div`
    width: 160px;
    font-size: 0.75em;
`;