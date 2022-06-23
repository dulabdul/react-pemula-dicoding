import React from "react";
import IncreaseButton from "./IncreaseButton";
import ResetButton from "./ResetButton";
import CounterDisplay from "./CounterDisplay";

class CounterApp extends React.Component{
    constructor(props){
        super(props);
        // inisialisasi nilai count di dalam state
        this.state = {
            count: 0
        }
        this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
        this.onResetEventHandler = this.onResetEventHandler.bind(this);
    }
    onIncreaseEventHandler (){
        this.setState((previousState) =>{
            return {
                count : previousState.count + 1
            }
        })
    }
    onResetEventHandler(){
        this.setState(() =>{
            return{
                count:0
            }
        })
    }
    render(){
        return (
            <div className="counter-app_container">
                <IncreaseButton increase={this.onIncreaseEventHandler} />
                <CounterDisplay count={this.state.count} />
                <ResetButton reset={this.onResetEventHandler}/>
            </div>
        )
    }
}

export default CounterApp;