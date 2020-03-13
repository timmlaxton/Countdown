import React, {Component} from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: "December 10th, 2020",
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
            Countdown to {this.state.deadline}</div>
            <div>
                <Clock
                deadline={this.state.deadline}
                />
                </div>
                <div>
                <input placeholder="new date"
                onChange={event => this.setState({newDeadline: event.target.value})}
                />
                <button onClick={() => this.changedDeadline()}>
                    Submit</button>
            </div>
            </div>
        
            
           
        
        );
    }
}

export default App;