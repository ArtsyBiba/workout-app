import { useState, useEffect } from 'react';

import Typography from '@material-ui/core/Typography';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const User = ({ firebase, authUser }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        let ref = firebase.db.ref().child(`users/${authUser.uid}/username`);
        ref.once('value', snapshot => {
            let data = snapshot.val();
            setUsername(data);
        });
    }, [firebase, authUser]);
    
    return ( 
        <>
            <Typography component='p' style={{paddingRight: '15px'}}>
                {username}
            </Typography>
            <AccountBoxIcon />
        </>
    )
};

export default User;