import React, {Component} from 'react'
import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'
import './contador.css'

class Contador extends Component{
    state = {
        numero: this.props.numeroInicial,
        passo: this.props.passoInicial || 1
    };
    Inc = ()=>{
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }
    Dinc = ()=>{
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }
    setPasso = (novoPasso) =>{
        this.setState({
            passo: novoPasso,
        })
    }
    render(){
        return(
        <div className = 'Contador'>
            <h2>Contador</h2>
            <Display numero={this.state.numero}></Display>
            <PassoForm passo = {this.state.passo} setPasso={this.setPasso}></PassoForm>           
            <Botoes setInc = {this.Inc} setDinc = {this.Dinc}></Botoes>
        </div>
        )
    }
}
export default Contador