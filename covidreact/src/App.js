import React from 'react';
import './App.css';
import './style.css'
import Tab from "./components/Tab";
import World from "./components/World";
import India from "./components/India";
import Local from "./components/Local";
import WorldMap from './components/world/WorldMap';
import Graph from './components/Graph';
import About from './components/About.js/About';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      type:"world",

    }
  }
  changeType=(value)=>{
    this.setState({
      type:value
    })
    console.log(value);
  }
  render(){
    //Tab bottom line is implemented in graph category buttons
    return(
      <div>
        <Tab changeType={this.changeType}>
          <World>
          <div className="Headings">
              <h3>Page Reach
              </h3>  
              <hr  align="center" width="50%">  
              </hr>
            </div> 
           {/* <WorldMap/> */}
           <Graph/> 
          </World>
          
          
          <India>
          </India>
          <Graph/>
          <Local>
          </Local>  

          <About> 
          </About>  
        
        </Tab>  
      </div>
    )
  }
}

export default App;
