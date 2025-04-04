import React, { useState, useEffect } from "react";
import api from "../../services/api"
import axios from "axios";

const Usuario = () => {

  const [vusuarios, setUsuarios] = useState([]);

  const [vnome, setNome] = useState('')
  const [vemail, setEmail] = useState('')
  const [vsenha, setSenha] = useState('')

  //Buscar usuarios cadastrados ao carregar a pagina
  useEffect(() => {
    axios.get("http://localhost:3001/usuarios")
      .then(res => setUsuarios(res.data))
      .catch(err => console.error("Erro ao buscar usuários", err));
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await api.post("http://localhost:3001/usuarios",
        { nome: vnome, email: vemail, senha: vsenha })
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <p>Usuário</p>
      </div>

      <form>
        <label>Nome</label>
        <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} ></input>

        <label>Email</label>
        <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}></input>

        <label>Senha</label>
        <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}></input>

        <div className="form-group">
          <br />
          <button onClick={handleSubmit}>Cadastrar Usuário</button>
        </div>

      </form>

      <div className="main-content">
        <p>Usuários Cadastrados</p>
      </div>
      <ul>
        {vusuarios.map(user => (
          <li key={user.id}> {user.nome} - {user.email} </li>
        ))}

      </ul>
    </div>


  )

}
export default Usuario;