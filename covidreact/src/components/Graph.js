import React, { Component } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceDot,
} from 'recharts';
import GraphCategory from "./GraphCategory"
import {Spin} from "antd";

var graphGlobalVariable = 1;

const CustomizedDot = (props) => {
  const {dataKey,payload,cx,cy} = props
 
  if(payload[dataKey]>0){   
    return (
      <svg xmlns="http://www.w3.org/2000/svg" x={cx-5} y={cy-5} width={10} height={10} fill="green" viewBox="0 0 48 48"><path fill="green" d="M24,44C13,44,4,35,4,24S13,4,24,4s20,9,20,20S35,44,24,44z"></path></svg>



      // <circle r="3" stroke="#389E0D" stroke-width="2" fill="#389E0D" width="873" height="265" class="recharts-dot recharts-line-dot" cx="756.7211538461538" cy="270">
      // </circle>
      
    )
  }
  return(
    <div>

    </div>
  )
}



const CustomTooltip = ({ active, payload, label,dataKey}) => {

  if (active) {
    var datKey=dataKey;
    console.log("PL",payload[0]);
    return (
      <div className="custom-tooltip">
        <div className="graphTooltipConversionWrapper">
         {(payload[0]===undefined)?"": <p className="conversionPercentageTooltip">{payload[0].payload.active}</p>}
          <p className="label">{label}</p>
        </div>
        <div className="totalVisitsTooltip">
        <svg className="tooltipIcon" width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0822 11.3953C19.8603 6.71484 16.5017 4.35938 11.9994 4.35938C7.49472 4.35938 4.13847 6.71484 1.91659 11.3977C1.82747 11.5864 1.78125 11.7925 1.78125 12.0012C1.78125 12.2099 1.82747 12.416 1.91659 12.6047C4.13847 17.2852 7.49706 19.6406 11.9994 19.6406C16.5041 19.6406 19.8603 17.2852 22.0822 12.6023C22.2627 12.2227 22.2627 11.782 22.0822 11.3953V11.3953ZM11.9994 17.9531C8.21893 17.9531 5.45097 16.0359 3.49862 12C5.45097 7.96406 8.21893 6.04688 11.9994 6.04688C15.7799 6.04688 18.5478 7.96406 20.5002 12C18.5502 16.0359 15.7822 17.9531 11.9994 17.9531ZM11.9057 7.875C9.62753 7.875 7.78065 9.72188 7.78065 12C7.78065 14.2781 9.62753 16.125 11.9057 16.125C14.1838 16.125 16.0307 14.2781 16.0307 12C16.0307 9.72188 14.1838 7.875 11.9057 7.875ZM11.9057 14.625C10.4549 14.625 9.28065 13.4508 9.28065 12C9.28065 10.5492 10.4549 9.375 11.9057 9.375C13.3564 9.375 14.5307 10.5492 14.5307 12C14.5307 13.4508 13.3564 14.625 11.9057 14.625Z"/>
          </svg>
         <div className="tooltipTotalVisitValue">{(payload[0]===undefined)?"": <p>{payload[0].payload[datKey]}</p>}</div>
        </div>
        
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* // <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }
  return null;
};


 
export class Graph extends Component {
  constructor(){
    super()
    this.state={
      dataKey:"confirmed",
      interval:0,
      graphData:[],
      }
    this.changeDataKey = this.changeDataKey.bind(this);
    this.dateManipulation = this.dateManipulation.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps){ 
  //  if(this.props.Page!==nextProps.Page||this.props.endDate!==nextProps.endDate||this.props.goal!==nextProps.goal||this.props.startDate!==nextProps.startDate||toString(this.props.variantId)!==toString(nextProps.variantId))
  //    graphGlobalVariable=1;
  }

  dateManipulation = (data)=>{
    var startDate = new Date(data[data.length-1].date);  //_id.dayOfYear;
    var endDate = new Date(data[0].date);                // ._id.dayOfYear;
    var interval = (endDate-startDate)/86400000;        //Milli sec in one day.
    interval = Math.round(interval/15);                       //change 15 for divisions                 
    
    for(let i=0;i<data.length;i++){

        // var x = data[i]._id.dayOfYear
        // var year = data[0]._id.year;
        let d = new Date(data[i].date);
        // var date = new Date(year, 0); //2020 can have a edge case 
        // var d= new Date(date.setDate(x));
        var b=d.toDateString();
        var c =b.split(" ");
        var e =c[2]+" "+c[1];
                                                          //Should replace or add new value?
        //Replacing
        data[i].date=e;                                                         
      }
    var onj = {
      data:data,
      interval:interval
    }

    return onj;
  }
  
  changeDataKey =(value)=>{
    console.log("DK",value);
    this.setState({
      dataKey:value
    })
    // console.log(value);
  }

componentDidUpdate(prevProps,prevState){
    var data = {
      startDate:this.props.startDate,
      endDate:this.props.endDate,
      variantId:this.props.variantId,
      pageId:this.props.Page,
      type:"pageReach",
      metricsCondition:"graph"
      }
         graphGlobalVariable=0;
   
      // if(prevProps.variantId.length!==this.props.variantId.length || prevProps.variantId!==this.props.variantId  || prevProps.startDate!==this.props.startDate || prevProps.endDate!==this.props.endDate || prevProps.goal!==this.props.goal){
      
      //   fetch(apiBaseUrl+'/'+this.props.goal,{
      //     method:'POST',
      //     body:JSON.stringify(data)
      // })
      // .then(response=>response.json())
      // .then((value)=>{
      //   if(value!=undefined){
      //     var data = this.dateManipulation(value);
         
      //     }
      //     else{
      //       var data = {
      //         data:"",
      //         interval:1
      //       }
      //     }
      //     this.setState({
      //       graphData:data.data,
      //       interval:data.interval
      //     })
      //   }
      // )
      //   .catch(err=>console.log(err))
      // }
  }
  
componentDidMount(){
  var startDate=this.props.startDate;
  var endDate=this.props.endDate;
  var variantId=this.props.variantId;
  var type="pageReach";
  var metricsCondition="graph";
      
  var data = {
    startDate:startDate,
    endDate:endDate,
    variantId:variantId,
    type:type,
    pageId:this.props.Page,
    metricsCondition:metricsCondition
  }
  // fetch(apiBaseUrl+'/'+this.props.goal,{
  //   method:'POST',
  //   body:JSON.stringify(data)  
  // }).then(data=>data.json())
  // .then(data=>{
  //   graphGlobalVariable=0;
  //   if(data!=undefined){
  //      var inter = this.dateManipulation(data);
       
  //   this.setState({
  //     graphData:inter.data,
  //     interval:inter.interval
  //   })
  // }
  // })

  fetch('https://corona-api.com/timeline')
  .then(data=>data.json())
  .then(data=>{
    
    let newData=this.dateManipulation(data.data);
    // console.log("nD",newData)
    this.setState({
      graphData:newData.data,
      interval:newData.interval
    })
  })

}


    render() {
      const data =this.state.graphData;
      var dataKey = this.state.dataKey;
      // console.log("DK",dataKey,this.state.graphData,this.state.interval);
          // if(data.length===0 || graphGlobalVariable===1){ 
          //   return (
          //     <div className="spinnerWrapper">
          //       <Spin size="small"/> 
          //     </div>
          //   )
          // }
        return (
          <div className="graphWrapper">
              <GraphCategory changeDataKey={this.changeDataKey}/>
              <div id='container'>
                {/* <Example/> */}
                <LineChart width={990} height={300} data={data} margin={{top: 5, right: 57, left: 0, bottom: 0}}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />
                  <XAxis dataKey="date" tickLine={true} interval={this.state.interval} />
                  <YAxis tickLine={false} axisLine={false} />
                  <Tooltip content={<CustomTooltip dataKey={this.state.dataKey} />}/>
                  <Legend />
                  <Line  dot={false} connectNulls={false} dataKey={this.state.dataKey} legendType='none' animationDuration={300} label={false} type='none'  stroke='#389E0D' strokeWidth={2} fill='#389E0D' />
                  {/* <Line  dot={<CustomizedDot/>} connectNulls={false} dataKey={this.state.dataKey} legendType='none' animationDuration={300} label={false} type='none'  stroke='#389E0D' strokeWidth={2} fill='#389E0D' /> */}
                </LineChart>        
            </div>  
          </div>   
        )
    }
  }

export default Graph  