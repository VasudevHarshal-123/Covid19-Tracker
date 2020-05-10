import React from "react";
import Tabs from "./Tabs"
import "../tabs.css"
 

class TabPannel extends React.Component{
    constructor() {
        super();
    }

    onClick = ()=>{
        const top = this.props.top
        const index = this.props.index;
        const onClick = this.props.onClick;
        onClick(index,this.props.type);
    };
    render() {
        const onClick = this.onClick
        const top = this.props.top
        const index = this.props.index
        let activeClass="";
        let triangularVector=""
        if(index===this.props.activeTab){
            activeClass = "activeTab";
            triangularVector = <svg className="triangularVector" width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 9L0.205772 0L15.7942 0L8 9Z"/></svg>   
        }
        else{
            activeClass=""
        }

        return(
            <li onClick={this.onClick} 
                className={activeClass + " individualTab"}
                index={index}
            >
                
                {this.props.children}
                {this.props.top}
                {/* {triangularVector} */}
            </li>
        );
    }
}

export default TabPannel