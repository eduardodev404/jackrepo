import { Link } from 'react-router-dom';
import '../css/style.css';
import Logo from '../img/pizza1.jpg'

function Header(){
    return(
        <header>
            <div>
                <img src={Logo} alt='Logo' title='logo pizzaria' />
            </div>
            <nav>
                <a href='/' className='abas'>Home</a>
                <span className='separador'>|</span>
                
                <a href='/crudProduto' className='abas'>Produto</a>
                <span className='separador'>|</span>

                <a href='/crudCategoria' className='abas'>Categoria</a>
                <span className='separador'>|</span>
                
                <a href='/login' className='abas'>Login</a>
            </nav>
        </header>
    )
}
export default Header;