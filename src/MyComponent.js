import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children }) => {
    
    return (
        <div> Hello. I'm {name}. <br/> The value of children is {children}. <br/> My favorite number is {favoriteNumber}.</div>
    );    
};
MyComponent.defaultProps = {
    name : 'react'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;