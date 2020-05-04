import React from 'react';

const MyComponent = props => {
    return (
        <div> Hello. I'm {props.name}. <br/> The value of children is {props.children}</div>
    );    
};
MyComponent.defaultProps = {
    name : 'react'
};
export default MyComponent;