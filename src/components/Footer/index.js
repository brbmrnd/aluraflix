import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/logo.png'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <footer className={styles.footer}>
            <Link to='./'>
                <img className={styles.img} src={logo} alt='logo AluraFlix' />
            </Link>
            <h2>Desenvolvido por Bárbara Miranda | Alura LATAM 2024 </h2>
            <div className={styles.socialMedia}>
                <a href='https://github.com/brbmrnd' target='_blank' rel='noopener noreferrer'>
                    <FaGithub size={'25px'} className={styles.icon} />
                </a>
                <a href='https://www.linkedin.com/in/barbaramrnd/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedinIn size={'25px'} className={styles.icon} />
                </a>
            </div>
        </footer>

    )
}

export default Footer;