import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './pages/Header/header'
import Categoria from './pages/Categoria/crudCategoria'
//import Categoria from './pages/Categoria/categoria'
import Home from './pages/Home/home'
import Login from './pages/Login/login'
import Produto from './pages/Produto/crudProduto'
import Usuario from './pages/Usuario/usuario'

function RoutesApp() {

        return (
                <BrowserRouter>
                < Header />
                        <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/crudCategoria" element={<Categoria />} />
                                <Route path="/crudProduto" element={<Produto />} />
                                <Route path="/login" element={<Login />} />
                                <Route path="/usuario" element={<Usuario />} />
                        </Routes>
                </BrowserRouter>
        );
}
export default RoutesApp;