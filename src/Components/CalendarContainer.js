import React, { useState } from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';

import Calendar from '../components/Calendar';
import WorkoutData from '../components/WorkoutData';

export default function CalendarContainer(props) {
    const {firebase, authUser} = props;
    
    const [date, setDate] = useState(moment());
    
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Calendar 
                    firebase={firebase} 
                    authUser={authUser}
                    date={date}
                    setDate={setDate} 
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <WorkoutData
                    firebase={firebase} 
                    authUser={authUser}
                    date={date}
                />
            </Grid>
        </>
    )
};