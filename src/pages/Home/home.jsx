import React , { useState, useEffect  } from "react";
import api from "../../services/api";

const DataList = () => {

    const[data, setData] = useState([]);
    const[loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    
      // Carregar os dados da API ao montar o componente
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);   
    api.get('produto')
      .then(response => {
        setData(response.data.data); // Atualiza a lista com os dados retornados
        setLoading(false); // Desativa o carregamento
      })
      .catch(error => {
        setError(error.message); // Armazena a mensagem de erro
        setLoading(false);
      });
  };

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>Erro: {error}</p>;
   
    return(
        <div className="consulta-container">
        <h2>Lista de Produtos</h2>
        <ul>
          {data.map(item => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              {item.id} - {item.nome} - {item.descricao} - {item.precovenda}
              
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
    );
};

export default DataList;