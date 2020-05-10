import React from 'react';
import './App.css';
import Tab from "./components/Tab"
import World from "./components/World";
import India from "./components/India";
import Local from "./components/Local";
import WorldMap from './components/world/WorldMap'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      type:""
    }
  }
  changeType=(value)=>{
    this.setState({
      type:value
    })
    console.log(value);
  }
  render(){
    return(
      <div>
        <Tab changeType={this.changeType}>
          <World>
            <WorldMap/>
          </World>
          
          
          <India>
          </India>
          
          <Local>
          </Local> 
        
        </Tab>  
      </div>
    )
  }
}

export default App;
