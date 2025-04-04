// npm install react-hook-form
import  {useForm} from "react-hook-form";
import React, { useState } from "react";
import api from "../../services/api";

const Produto = () => {

    const [vnome, setNome] = useState('')
    const [vtipo, setTipo] = useState('')
    const [vdesc, setDesc] = useState('')
    const [vcompra, setCompra] = useState('')
    const [vvenda, setVenda] = useState('')
    const [vestoque, setEstoque] = useState('')
  
    const handleSubmit = async () =>{
      try{
        const response = await api.post("produto",
        {nome: vnome, tipo: vtipo, descricao: vdesc , precocompra: vcompra, precovenda: vvenda, quantidadeEstoque: vestoque})
        console.log(response.data)
      }catch(error){
        console.log(error)
      }
    };

    return (
        <div className="app-container">
            <div className="main-content">
                <p>Cadastro de Produto</p>
            </div>

            <form>
                <label>Nome do Produto {vnome}</label>
                <input type="text" placeholder="Nome do Produto" onChange={(e)=>setNome(e.target.value)} ></input> 
               
                <label>Tipo do Produto</label>
                <input type="text" placeholder="Tipo do Produto" onChange={(e)=>setTipo(e.target.value)}></input> 
               
                <label>Descrição</label>
                <input type="text" placeholder="Descrição" onChange={(e)=>setDesc(e.target.value)}></input> 
                
                <label>Preço de Compra</label>
                <input type="text" placeholder="Preço de Compra" onChange={(e)=>setCompra(e.target.value)}></input> 
               
                <label>Preço de Venda</label>
                <input type="text" placeholder="Preço de Venda" onChange={(e)=>setVenda(e.target.value)}></input>

                <label>Quantidade Estoque</label>
                <input type="text" placeholder="Quantidade Estoque" onChange={(e)=>setEstoque(e.target.value)}></input> 
                
                <div className="form-group">
                    <br />
                    <button onClick={handleSubmit}>Cadastrar Produto</button>
                </div>
            </form>
        </div>
    )

}

export default Produto;