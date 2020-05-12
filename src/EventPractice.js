import React, { Component } from 'react';

class EventPractice extends Component {
    
    state = {
        message : ''
    }

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState ({
            message : e.target.value
        });
    }

    handleClick() {
        alert(this.state.message);
        this.setState({
            message : ''
        });
    }

    render() {
        return (
            <div>
                <h1>Event</h1>
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