import React from 'react'
import './App.css'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComPareamento'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Familia from './components/basicos/Familia'
import Card from './components/layout/card'
import FamiliaMembro from './components/basicos//FamiliaMembro'
import ListaAluno from './components/repeticao/ListaAluno'
import Produtos from './components/repeticao/Produtos'
import ParOuImpar from './components/condicional/ParOuImpar'
export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React 3</h1>

            <div className="Cards">
                
            <Card titulo="#8 Renderização Par ou Impar" color="#fff">
                <ParOuImpar>numero{21}</ParOuImpar>                    
                </Card>

           
            <Card titulo="#7 Desafio Repetição" color="#fff">
                   <Produtos></Produtos>                   
                </Card>
            
            <Card titulo="#6 Repetição" color="#ff7">
                   <ListaAluno></ListaAluno>                    
                </Card>

                <Card titulo="#5 Familia" color="#fff">
                    <Familia sobrenome="Silveira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Julia "  />
                        <FamiliaMembro nome="Ronaldo " />
                    </Familia>
                </Card>
                <Card titulo="#4 Desafio Aleatorio" color="pink">
                    <Aleatorio min={1} max={100} />
                </Card>

                <Card titulo="#3 Fragmento" color="#DFFF00">
                    <Fragmento></Fragmento>
                </Card>

                <Card titulo="#2 Com Parametro" color="#40E0D0">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Tag Fechada Simples"
                    />
                </Card>
                <Card titulo="#1 Com Parametro" color="#CCCCFF">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}