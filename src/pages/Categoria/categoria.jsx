import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import api from "../../services/api";


const Categoria = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');


  const onSubmit = async (data) => {
     try {
      const response = await api.post('categoria', {
        nome: data.nome,
        descricao: data.descricao
      });
      console.log(response.data);
      alert('Categoria cadastrado com sucesso!');
      
    } catch (error) {
      console.error('Erro ao cadastrar Categoria', error);
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        Cadastro de Categoria
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label>Categoria {nome}</label>
          <input
            type="text"
            placeholder="Sua Categoria"
            {...register('nome', { required: 'Categoria é obrigatório' })}
            onChange={(e) => setNome(e.target.value)}
          />
          {errors.nome && <p>{errors.nome.message}</p>}
        </div>
        <div className="form-group">
          <label>Descrição {descricao}</label>
          <input
            type="text"
            placeholder="Sua Descrição"
            onChange={(e) => setDescricao(e.target.value)}
          />
         </div>
 
        <div className="form-group">
          <button type="submit">Cadastrar</button>
        </div>
        
      </form>
    </div>
  );
};

export default Categoria;
