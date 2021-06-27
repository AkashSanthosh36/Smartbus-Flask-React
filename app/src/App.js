import React,{ Component } from 'react';
import './App.css';
import Display from './Components/display'
import Register from './Components/register'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Register></Register>
        {/* <Display></Display> */}
      </div>
    )
  }
}

export default App;
