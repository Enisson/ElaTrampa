import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './header.css';

export default function Header() {
return (
    <header>
        <div className="logo">
            <Link to="/"><img src={logo} alt="Ela trampa logo" /></Link>
        </div>

        <nav className='nav-container'>
            <ul className='list-container'>
                <li className='list-link'><Link to="/">Início</Link></li>
                <li className='list-link'><Link to="/aboutus">Quem somos</Link></li>
                <li className='list-link'><Link to="/jobs">Vagas</Link></li>
                <li className='list-link'><Link to="/signup">Cadastro</Link></li>
                <li className='list-link'><Link to="/contact">Contato</Link></li>
                <li className='list-link'><Link to="/">Administração</Link></li>
            </ul>
        </nav>

        <div className='user-container'>
            <p>Squad53</p>
        </div>
    </header>
);
};