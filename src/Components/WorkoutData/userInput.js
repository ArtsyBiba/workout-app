import React, { useState } from 'react';

import './styles.css';

export default function UserInput(props) {
    return (
        <div className='user-input'>
            <div className='input-type'>{props.name}</div>
            <input />
        </div>
    )
};