import React, { Component } from 'react';

// function App() {
//   return (
//     <div><h1>hoge</h1></div>
//   );
// }

class App extends Component {
  render(){
    return React.createElement(
      "h1",
      null,
      "hello, Word!"
    );
  }
}

export default App;
