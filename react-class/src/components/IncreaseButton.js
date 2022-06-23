import React from "react";

const IncreaseButton = ({increase}) =>{
    return(
        <div>
            <button className="increase-button" onClick={increase}>+ increase</button>
        </div>
    )
}


export default IncreaseButton;