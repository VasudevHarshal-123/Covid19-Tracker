import React,{Component} from 'react';
// import { Select } from 'antd';
import Select from 'react-select';
import countryList from 'react-select-country-list'
import DateRange from './DateRange'
// const { Option } = Select;


export default class Statistics extends Component{
    constructor(){
        super();
        this.options = countryList().getData();     //Declaring variable in react inside constructor check 
        if(this.options[0].label!=="World")
            this.options.unshift({value:"W",label:"World"});
        
        this.state = {
            countryOptions:this.options,
            value:"World"
        }
        this.countryChange = this.countryChange.bind(this);
    }

    countryChange = (value)=>{  
        this.setState({value:value.label});
    }

    render(){
        console.log(this.state.countryOptions);
        if(!this.state.countryOptions){
            return(
                <div>

                </div>
            )
        }
        return(
            <div>
                <div className="CountrySelector">
                    <Select 
                        options={this.state.countryOptions}
                        value={this.state.value}
                        onChange={this.countryChange}
                        placeholder ={this.state.value}
                    />
                </div>
                {this.state.value=="World"
                    ?<div className="WorldWide">
                            {/* Will only be available if world option is selected */}
                                <div className="DateRange"><DateRange/></div>
                        
                        <div className="Stats">
                            <div className='StatsIndividual'>
                                <h1>CONFIRMED</h1>
                                <p>54,54,545</p>
                                <p>+545</p>
                            </div>
                            <div className='StatsIndividual'>
                                <h1>RECOVERED</h1>
                                <p>54,54,545</p>
                                <p>+54</p>
                            </div>
                            <div className='StatsIndividual'>
                                <h1>DEATHS</h1>
                                <p>54,54,545</p>
                                <p>+54</p>
                            </div>
                            <div className='StatsIndividual'>
                                <h1>ACTIVE</h1>
                                <p>54,54,545</p>
                                <p>5445</p>
                            </div>                
                        </div>
                    </div>
                    :<div className="IndividualCountry">

                    </div>
                }
            </div>
        )
    }
}

