import React, { useState } from 'react';
import moment from 'moment';

import Grid from '@material-ui/core/Grid';
import './calendar.css';

import CalendarBody from './calendar-body';
import CalendarHead from './calendar-head';

function Calendar(props) {
    let defaultSelectedDay = {
        day: moment().format('D'),
        month: moment().month()
    };

    /* HOOKS */
    const [dateObject, setdateObject] = useState(moment());
    const [showMonthTable, setShowMonthTable] = useState(false);
    const [selectedDay, setSelected] = useState(defaultSelectedDay);

    /* CALENDAR HEAD */
    const allMonths = moment.months();
    const currentMonth = () => dateObject.format('MMMM');
    const currentYear = () => dateObject.format('YYYY');

    const setMonth = month => {
        let monthNo = allMonths.indexOf(month);
        let newDateObject = Object.assign({}, dateObject);
        newDateObject = moment(dateObject).set('month', monthNo);
        setdateObject(newDateObject);
        setShowMonthTable(false);
    };

    const toggleMonthSelect = () => setShowMonthTable(!showMonthTable);

    /*** CALENDAR BODY ***/
    const setSelectedDay = day => {
        setSelected({
                day,
                month: currentMonthNum()
        });
    };

    const currentMonthNum = () => dateObject.month();
    const daysInMonth = () => dateObject.daysInMonth();
    const currentDay = () => dateObject.format('D');
    const actualMonth = () => moment().format('MMMM');

    const firstDayOfMonth = () => moment(dateObject).startOf('month').format('d');

    return (
        <Grid 
            container 
            spacing={3}   
            justify='center'
            alignItems='center' 
        >
            <Grid item >
                    <CalendarHead
                        allMonths={allMonths}
                        currentMonth={currentMonth}
                        currentYear={currentYear}
                        setMonth={setMonth}
                        showMonthTable={showMonthTable}
                        toggleMonthSelect={toggleMonthSelect}
                    />
                    <CalendarBody 
                        firstDayOfMonth={firstDayOfMonth}
                        daysInMonth={daysInMonth}
                        currentDay={currentDay}
                        currentMonth={currentMonth}
                        currentMonthNum={currentMonthNum}
                        actualMonth={actualMonth}
                        setSelectedDay={setSelectedDay}
                        selectedDay={selectedDay}
                        weekdays={moment.weekdays()} 
                    />
            </Grid>
        </Grid>
    )
};

export default Calendar;