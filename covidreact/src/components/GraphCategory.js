import React, { Component } from 'react'
// import "../../../../public/css/style.css"
import {Select} from 'antd'
const {Option} = Select;

export class GraphCategory extends Component {
    constructor(){
    super()
    this.state={
        activeButton:"visitsPerDayDocs"
    }
    this.onClick = this.onClick.bind(this);
    
}
    onClick=(value)=>{
        // this.setState({
        //     activeButton:value
        // })
        
        console.log("DK",value);
        var changeDataKey = this.props.changeDataKey;
        changeDataKey(value);
    }

    render() {
        //className="graphCategory">
        return (
            <div> 
                <Select defaultValue="confirmed" style={{ width: 120 }} onChange={this.handleChange}>
                  <Option value="confirmed" onClick={this.onClick.bind(this,"confirmed")}>Confirmed</Option>
                  <Option value="active" onClick={this.onClick.bind(this,"active")}>Active</Option>           
                  <Option value="deaths" onClick={this.onClick.bind(this,"deaths")}>Deaths</Option>
                  <Option value="recovered" onClick={this.onClick.bind(this,"recovered")}>Recovered</Option>
                </Select>
                {/* <button className={(this.state.activeButton=="visitsPerDayDocs")?"activeGraph":"" + " graphButton"} onClick={this.onClick.bind(this,"visitsPerDayDocs")}>Visits</button>

                <button className={this.state.activeButton=="uniqueVisits"?"activeGraph":"" + " graphButton"}  onClick={this.onClick.bind(this,"uniqueVisits")} >Unique visits</button> */}
                {/* <button className={this.state.activeButton=="conversionNumber"?"activeGraph":"" + " graphButton"}  onClick={this.onClick.bind(this,"conversionNumber")} >Conversions</button> */}
            </div>
        )
    }
}

export default GraphCategory