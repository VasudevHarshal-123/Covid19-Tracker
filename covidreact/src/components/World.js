import React from "react";

class World extends React.Component{
    render(){
        return(
        <div>{this.props.children}</div>
        )
    }
}

export default World;