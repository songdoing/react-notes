import React, { Component } from 'react';

class EventPractice extends Component {
    
    state = {
        username : '',
        message : ''
    }
/*
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
*/
    handleChange = (e) => {
        this.setState ({
            [e.target.name] : e.target.value
        });
    }

    handleClick = () => {
        alert('Hey  ' + this.state.username + '! ' + this.state.message);
        this.setState({
            username : '',
            message : ''
        });
    }
// when 'enter' key is pressed
    handleKeyPress =(e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>Event</h1>
                <input type = "text" name="username" placeholder="username" value={this.state.username} onChange={this.handleChange} />
                <input type = "text" name="message" placeholder="write something." value = {this.state.message}
                        onChange = {
                            this.handleChange
                            /*
                            (e) => {
                                console.log(e.target.value);
                                this.setState({
                                    message : e.target.value
                                })
                            }
                            */
                        } 
                        onKeyPress = {
                            this.handleKeyPress
                        }
                />
                <button onClick = {
                    this.handleClick
                    /*
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message : ''
                        });
                    }
                    */
                }>Enter</button>
            </div>
        );
    }
}

export default EventPractice;