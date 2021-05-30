import React from 'react'
export default (props) =>{
    return(
    <div>
        <button onClick={props.setInc}>Aumenta</button>
        <button onClick={props.setDinc}>Diminui</button>   
    </div>
    )
}