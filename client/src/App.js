import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch('/jobs')
      .then(response => response.json())
      .then(response => this.setState({
        jobs: response
      }))
  }

  render() {
    return (
        <ul>
          {this.state.jobs.map( (item, index) => (<li className='list' key={index}>{item.title}</li>) )}
        </ul>
    );
  }
}

export default App;
