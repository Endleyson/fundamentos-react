import React from 'react'
export default props =>{
    const cb = props.quandoClicar
    const gerarIdade = () => parseInt(Math.random() *(30))+40
        return(
    <div><br />
        <div>Informações vindas do Filho</div>
       <button onClick={_=>cb('João', gerarIdade, true)}>
           Fronecer Informações
       </button>
    </div>
    )
}