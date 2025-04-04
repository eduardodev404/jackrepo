import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import '../css/style.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setSenha] = useState("");
    const [error, setError] = useState("");  // Para exibir mensagens de erro
    const navigate = useNavigate();

    // Dados Fixos para validação
    const fixedEmail = "admin@admin.com.br";
    const fixedSenha = "123456";

    // Função chamada ao submeter o formulário
    const handleSubmit = (e) => {
        e.preventDefault();  // Previne o envio padrão do formulário
       
        setError("");  // Limpar o erro anterior

        if (email === fixedEmail && password === fixedSenha) {
            
            navigate("/crudProduto");  // Redireciona para a página de produto
        } else {
           
            setError("Email ou Senha inválidos!");  
        }
    };

    return (
        <div className="app-container">
            <div className="main-content">
                <p>Login</p>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" placeholder="Email" value={email}  
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label>Senha</label>
                    <input type="password" placeholder="Senha" value={password}
                     onChange={(e) => setSenha(e.target.value)} 
                    />
                </div>

                {/* Exibe mensagem de erro, se houver */}
                {error && <p className="error-message">{error}</p>}

                <div className="form-group">
                    <button type="submit">Login</button>
                </div>

                <div className="register-link">
                    <p>Não tem uma conta? <a href="/usuario">Cadastre-se</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;
