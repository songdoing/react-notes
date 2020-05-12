import React, { Component } from 'react';

class EventPractice extends Component {
    
    state = {
        message : ''
    }

    render() {
        return (
            <div>
                <h1>Event</h1>
                <input type = "text" name="message" placeholder="write something." 
                        onChange = {
                            (e) => {
                                console.log(e.target.value);
                                this.setState({
                                    message : e.target.value
                                })
                            }
                        } 
                />
                <button onClick = {
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message : ''
                        });
                    }
                }>Enter</button>
            </div>
        );
    }
}

export default EventPractice;