import React, { Component } from 'react';

class App extends Component  {
  state = {
    todos: [
      {id: 1, content: 'Do something'},
      {id: 2, content: 'Do something else'},
    ],
  }

  render() {
    return (
    <div className="App">
      <header className="App-header">
        Hai
      </header>
    </div>
  )};
}

export default App;
