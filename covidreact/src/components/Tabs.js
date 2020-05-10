import React from "react"
import TabPannel from "./TabPannel"
import "../tabs.css"


class Tabs extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                activeTab:0
            }
        }
        handleClick = (tab,type)=>{
            this.setState({activeTab:tab})  
            var changeType = this.props.changeType;
            changeType(type);  
        }
        render() {
            const {handleClick,props: {children},state:{activeTab}} = this;  
            
                
            return (
                 <div className="tabPanel">
                      <ol className="Header">
                            {children.map((child,index)=>{
                               const {top} = child.props
                               const Index = index; 
                                    
                               return <TabPannel type={child.props.type} key={Index} activeTab={this.state.activeTab} top={top} index={Index}  onClick={handleClick}/>
                           })} 
                      </ol> 

                      <div className="Body">
                        { children.map((child,index)=>{
                             if(index!==activeTab){
                                return ""     
                            }
                            else{
                                return child.props.children
                            }
                        })}
                      </div>    
                 </div>
                 )
            }
        }

        export default Tabs;