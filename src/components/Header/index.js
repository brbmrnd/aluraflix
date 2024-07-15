import { Link } from 'react-router-dom';
import styles from './Header.module.css'
import HeaderLink from "../HeaderLink";
import logo from '../../assets/icons/logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./" className={styles.linkLogo}>
                <img src={logo} alt='logo do AluraFlix' />
            </Link>
            <nav className={styles.nav}>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./newVideo" >
                    Novo Vídeo
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;