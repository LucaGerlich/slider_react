import React from 'react';

const Switch = ({isToggled, onToggle}) => {
 
    return (
        <label>
            <input type="checkbox" checked={isToggled} onChange={onToggle} className="Toggle"/>
            <span/>
        </label>
    )
}

export default Switch;