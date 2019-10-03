import React, { Component } from 'react';
import './App.css';
import Term from './Term';
import Form from './Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTerm: {
        word: '',
        definition: '',
        example: '',
      },
      terms: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    this.setState((oldState) => {
      const newState = oldState;
      newState.newTerm[target.name] = target.value;

      return newState;
    });
  }

  handleSubmit() {
    this.setState((oldState) => {
      const newState = oldState;
      newState.terms.push(oldState.newTerm);
      newState.newTerm = { word: '', definition: '', example: '' };
      return newState;
    })
  }

  render() {
    return (
      <div style={{ padding: '15px' }}>
        <h1>Urban Ricktionary</h1>

        <Form term={this.state.newTerm} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

        <hr />

        {this.state.terms.map((term) => (
          <Term term={term} />
        ))}
        
      </div>
    )
  }
}

export default App;
