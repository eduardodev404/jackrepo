import React, { useState, useEffect } from "react";
import api from "../../services/api";

const DataManagement = () => {
  const [data, setData] = useState([]); // Armazena a lista de categorias
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento
  const [error, setError] = useState(null); // Armazena mensagens de erro, caso ocorram
  const [formData, setFormData] = useState({ nome: "", descricao: "" }); // Armazena os dados do formulário
  const [isEditing, setIsEditing] = useState(false); // Define se estamos no modo de edição
  const [editingId, setEditingId] = useState(null); // Armazena o ID do item sendo editado

  // Carregar os dados da API ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    api.get('categoria')
      .then(response => {
        setData(response.data.data); // Atualiza a lista com os dados retornados
        setLoading(false); // Desativa o carregamento
      })
      .catch(error => {
        setError(error.message); // Armazena a mensagem de erro
        setLoading(false);
      });
  };

  // Função para lidar com mudanças nos inputs do formulário
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // Atualiza o valor do campo modificado
  };

  // Função para cadastrar ou atualizar um item
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Atualiza o item existente
      api.put(`categoria/${editingId}`, formData)
        .then(() => {
          fetchData(); // Recarregar a lista após edição
          resetForm(); // Limpar o formulário
        })
        .catch(error => setError(error.message));
    } else {
      // Cadastra um novo item
      api.post('categoria', formData)
        .then(() => {
          fetchData(); // Recarregar a lista após cadastro
          resetForm(); // Limpar o formulário
        })
        .catch(error => setError(error.message));
    }
  };

  // Função para habilitar a edição de um item
  const handleEdit = (item) => {
    setIsEditing(true); // Ativa o modo de edição
    setEditingId(item.id); // Define o ID do item a ser editado
    setFormData({ nome: item.nome, descricao: item.descricao }); // Preenche o formulário com os dados do item
  };

  // Função para resetar o formulário
  const resetForm = () => {
    setFormData({ nome: "", descricao: "" }); // Limpa os campos do formulário
    setIsEditing(false); // Desativa o modo de edição
    setEditingId(null); // Reseta o ID de edição
  };

  // Função para deletar um item
  const handleDelete = (id) => {
    api.delete(`categoria/${id}`)
      .then(() => fetchData()) // Recarrega a lista após a exclusão
      .catch(error => setError(error.message));
  };

  if (loading) return <p>Carregando...</p>; // Exibe um texto enquanto os dados estão carregando
  if (error) return <p>Erro: {error}</p>; // Exibe uma mensagem de erro, caso ocorra

  return (
    <div className="app-container">
      {/* Seção do formulário de cadastro */}
      <div className="cadastro-container">
        <h1>{isEditing ? "Atualizar Categoria" : "Cadastrar Nova Categoria"}</h1>

        <form onSubmit={handleSubmit} className="form-group">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome da categoria"
            required
          />
          
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            name="descricao"
            value={formData.descricao}
            onChange={handleChange}
            placeholder="Descrição da categoria"
            required
          />

          <button type="submit">{isEditing ? "Atualizar" : "Cadastrar"}</button> {/* Botão para cadastrar ou atualizar */}
        </form>
      </div>

      {/* Separador visual */}
      <hr style={{ margin: "40px 0", border: "1px solid #ddd" }} />

      {/* Seção da lista de categorias */}
      <div className="consulta-container">
        <h2>Lista de Categorias</h2>
        <ul>
          {data.map(item => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.id} - {item.nome} - {item.descricao}
              
              {/* Container para os botões Editar e Deletar */}
              <div style={{ display: "inline-flex", gap: "10px", marginLeft: "10px" }}>
                {/* Botão de editar */}
                <button onClick={() => handleEdit(item)} style={{ marginLeft: "10px" }}>
                  Editar
                </button>

                {/* Botão de deletar */}
                <button onClick={() => handleDelete(item.id)} style={{ color: "red" }}>
                  Deletar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DataManagement;
