import React from "react";


const ResetButton = ({reset}) =>{
    return(
        <div>
            <button onClick={reset}>- reset</button>
        </div>
    )
}

export default ResetButton;