import React, { useState } from 'react';

import './styles.css';

export default function WorkoutStatsBoard(props) {
    return (
        <div className='workout-stats'>
            <div className='header'>Workout Board - Total for This Year</div>
            <div className='display'>
                <div className='stats'>
                    <div className='stat-name'># of Workouts</div>
                    <div className='stat-data'>num</div>
                </div>
                <div className='stats'>
                    <div className='stat-name'># of Minutes</div>
                    <div className='stat-data'>num</div>
                </div>
                <div className='stats'>
                    <div className='stat-name'>Average Intensity</div>
                    <div className='stat-data'>num</div>
                </div>
            </div>
        </div>
    )
};