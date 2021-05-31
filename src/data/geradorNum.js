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
console.log(geraNumeros(7))