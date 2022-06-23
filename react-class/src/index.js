import React from "react";
import {createRoot} from 'react-dom/client';

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

const CounterDisplay = ({count}) =>{
    if(count === 0){
        return <p>{count}</p>
    }else if(count % 5 === 0 && count % 7 === 0){
        return <p>FizzBuzz</p>
    }else if(count % 5 === 0){
        return <p>Fizz</p>
    }else if(count % 7 === 0){
        return <p>Buzz</p>
    }else{
        return <p>{count}</p>
    }

    // return (
    //     <p>{count}</p>
    // )
}

const IncreaseButton = ({increase}) =>{
    return(
        <div>
            <button className="increase-button" onClick={increase}>+ increase</button>
        </div>
    )
}

const ResetButton = ({reset}) =>{
    return(
        <div>
            <button onClick={reset}>- reset</button>
        </div>
    )
}
const root = createRoot(document.querySelector('#root'));
root.render(<CounterApp/>)