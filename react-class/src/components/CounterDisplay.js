import React from "react";

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

}
export default CounterDisplay;