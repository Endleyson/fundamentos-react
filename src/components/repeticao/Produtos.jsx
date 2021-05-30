import React from 'react'
import produtos from '../../data/produtos'
import './Tabela.css'

export default props =>{
    const trs = produtos.map((produtos, i)=>{
        return(
            <tr className = {i % 2===0 ? 'Par ' : ' Impar '} key={produtos.id}>
                 <td>{produtos.id}  </td>
                <td>{produtos.produto}  </td>
                <td> R$ {produtos.preco.toFixed(2).replace('.',',')}</td>
                </tr>
        )
    })
       return(
        <div>
            <table className='Tabela'>
                <thead>
              <tr>
                  <th>ID</th>
                  <th>PRODUTO</th>
                  <th>PPREÇO</th>
              </tr>
             </thead>
             <tbody>
                    {trs}
             </tbody>

            </table>
        </div>
    )

}