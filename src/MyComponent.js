import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, children }) => {
    
    return (
        <div> Hello. I'm {name}. <br/> The value of children is {children}</div>
    );    
};
MyComponent.defaultProps = {
    name : 'react'
};

MyComponent.PropTypes = {
    name : PropTypes.string
};

export default MyComponent;