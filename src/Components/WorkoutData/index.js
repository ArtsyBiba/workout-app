import React, { useState } from 'react';

import './styles.css';

export default function WorkoutData(props) {
    const {firebase, authUser, date} = props;
    
    // const [username, setUsername] = useState('')

    // useEffect(() => {
    //     let ref = firebase.db.ref().child(`users/${authUser.uid}/username`);
    //     ref.once('value', snapshot => {
    //         let data = snapshot.val();
    //         setUsername(data);
    //     });
    // }, [firebase, authUser])

    function createDate() {
        return date.format('MM/DD/YYYY');
    };

    return (
        <div className='workout-data'>
            <div className='header'>
                Workout Data
            </div>
            <div className='body'>
                <div className='selected-date'>
                    {createDate()}
                </div>
                Body
            </div>
        </div>
    )
};