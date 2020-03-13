import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';
import {Form, FormControl, Button} from 'react-bootstrap'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: "10 December, 2020",
            newDeadline: ""
        }
    }

    changedDeadline() {
        this.setState({deadline: this.state.newDeadline})
        
    }


    render() {
        return (
            <div className="App">
            <div className="App-title">
            Countdown to {this.state.deadline}
            </div>
                <Clock
                deadline={this.state.deadline}
                />
               <FormControl-lg>
                <FormControl 
                className="DeadLine-input"
                placeholder="new date"
                onChange={event => this.setState({newDeadline: event.target.value})}
                />
                <Button onClick={() => this.changedDeadline()}>
                Submit
                </Button>
            </FormControl-lg>
            </div>
        
            
           
        
        );
    }
}

export default App;