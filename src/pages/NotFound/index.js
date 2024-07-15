import styles from './NotFound.module.css';
import { LiaExclamationSolid } from "react-icons/lia";


function NotFound() {
    return (
        <section className={styles.container}>
            <h2 className={styles.h2}>Opsss</h2>
            <LiaExclamationSolid size={'350px'} />
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NotFound;