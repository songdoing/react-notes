import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name : 'react'
    };
    
    static propTypes = {
        name : PropTypes.string,
        favoriteNumber : PropTypes.number.isRequired
    };

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


export default MyComponent;