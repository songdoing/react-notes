import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const {name, favoriteNumber, children} = this.props;
        return(
            <div>
                Hello. I'm {name}. <br/>
                The value of children is {children}. <br/>
                My favorite number is {favoriteNumber}.
            </div>
        );
    }
}
MyComponent.defaultProps = {
    name : 'react'
};

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default MyComponent;