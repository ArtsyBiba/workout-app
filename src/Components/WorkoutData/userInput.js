import React, { useState } from 'react';

import './styles.css';

export default function UserInput(props) {
    const [input, setInput] = useState('');

    const handleClick = () => {
        
    };
    
    return (
        <div className='user-input-wrapper'>
            <div className='user-input'>
                <div className='input-type'>Activity Type</div>
                <input onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className='user-input'>
                <div className='input-type'>Duration</div>
                <input onChange={(e) => setInput(e.target.value)} />
            </div>
            <div className='user-input'>
                <div className='input-type'>Intensity</div>
                <input onChange={(e) => setInput(e.target.value)} />
            </div>
            <button className='submit-button' onClick={handleClick}>Add</button>
        </div>
    )
};