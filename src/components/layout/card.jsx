import React from 'react'
import './Card.css'
export default props => {
    const estilo={
        backgroundColor: props.color || "greenyellow",
        borderColor:  props.color || "greenyellow",
        }
    const colors={
        color: props.color || "greenyellow",
    }
    return(
        <div className="Card" style={estilo}>
             <div className="Title">{props.titulo}</div>
             <div className="Content"style={colors}>{props.children}</div>
        </div>

    )
}