import React from 'react';

const MyComponent = props => {
    return <div> Hello. I'm {props.name}.</div>;
};
MyComponent.defaultProps = {
    name : 'react'
};
export default MyComponent;