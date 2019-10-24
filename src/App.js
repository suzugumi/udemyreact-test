import React, { Component } from 'react';

// function App() {
//   return (
//     <div><h1>hoge</h1></div>
//   );
// }

class App extends Component {
  render(){
    return(
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("メッセージだよーん")}}/>
    </React.Fragment>
    );
  }
}

export default App;
