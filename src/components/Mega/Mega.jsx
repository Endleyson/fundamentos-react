import React, {useState} from 'react'
export default props =>{
    function numNaoContido (min, max, Array){
        const aleatorio = parseInt(Math.random()*(max-min))+min
        return Array.includes(aleatorio) ? 
         numNaoContido (min, max, Array) :
        aleatorio
    }
    function geraNumeros(qtde){
        const numeros = Array(qtde).fill(0).reduce((nums)=>{
            const  novoNumero = numNaoContido(1, 61, nums)
            return [...nums, novoNumero]
        },[])
        .sort((a,b)=>a-b)
        return numeros         
    }
    const [qtde, setQtde]= useState(props.qtde || 6)
    const numInicial = Array(qtde).fill(0) 
    const [numero, setNumeros]= useState(numInicial)
    
    return(
        <div>
            <h1>Gerador Mega</h1>
            <h2>{numero.join('-')}</h2>
            <div>
                <label >Qtde de Números a Gerar</label>
                <input min= "6" max="15" type="number" value={qtde} onChange={e=>setQtde(+e.target.value)}/>
            </div>
            <button onClick={_=>setNumeros(geraNumeros(qtde))}>Gerar Números</button>
        </div>
    )

}