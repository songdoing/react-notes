import React from 'react';

const MyComponent = ({name, children }) => {
    
    return (
        <div> Hello. I'm {name}. <br/> The value of children is {children}</div>
    );    
};
MyComponent.defaultProps = {
    name : 'react'
};
export default MyComponent;