import React, {Component} from 'react';
import './App.css';

class App extends Component {
    state = {

        title: 'Hello World',
        body: 'This Is My First React App '

    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
            </div>
        );
    }
}

export default App;
