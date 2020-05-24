import React from 'react';
import './default-input.scss';

const DefaultInput = ({ placeholder, className,
                          onChange, value, type }) => {
    return <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        value={value}>
    </input>
};

export default DefaultInput;