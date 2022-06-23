import React from "react"

const DeleteButton = ({id, onDelete}) =>{
    return (
        <div className="contact-item__btndelete">
            <button onClick={() => onDelete(id)}>X</button>
            
        </div>
    )
}

export default DeleteButton;