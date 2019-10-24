import React from 'react';

const App = () => {
  const profiles = [
    {name:"うんちまん", age:5},
    {name:"うんちまん", age:12},
    {name:"名無し"}
  ]
  return (
  <div>
    {
      profiles.map((profle,index)=> {
        return <User name={profle.name} age={profle.age} key={index} />
      })
    }
  </div>
  )
}

const User = (props) => {
  return (
    <p>わたしの名前は{props.name}です！{props.age}才です</p>
  );
}
export default App;

User.defaultProps = {
  age: 0
}


// function App() {
//   return (
//     <div><h1>hoge</h1></div>
//   );
// }

// class App extends Component {
//   render(){
//     return(
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("メッセージだよーん")}}/>
//     </React.Fragment>
//     );
//   }
// }

