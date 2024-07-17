import styles from './Cards.module.css';
import { Link } from 'react-router-dom';
import { GoTrash } from "react-icons/go";
import { MdOutlineEdit } from "react-icons/md";
import { IoPlayOutline } from "react-icons/io5";


function Cards({ id, title, capa, onDelete, onEdit, color }) {
    return (
        <div className={styles.card} style={{borderColor: color}} >
            <Link to={`video/${id}`} className={styles.link}>
                <img src={capa} alt={title} className={styles.capa} />
                <h2>{title}</h2>
            </Link>
            <div className={styles.icons}>
                <Link to={`video/${id}`} className={styles.icon}>
                    <IoPlayOutline
                        size={'25px'}
                    />
                </Link>
                <MdOutlineEdit
                    className={styles.icon}
                    size={'25px'}
                    onClick={() => onEdit(id)}
                />
                <GoTrash
                    className={styles.icon}
                    size={'25px'}
                    onClick={() => onDelete(id)}
                />
            </div>
        </div>
    );
}

export default Cards;