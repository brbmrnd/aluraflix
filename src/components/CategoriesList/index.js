import React from 'react';
import Category from '../Category';
import styles from './CategoriesList.module.css';

function CategoriesList({ categories }) {
    return (
        <div className={styles.container}>
            {categories.map((category) => (
                <Category
                    key={category.id}
                    name={category.name}
                    cor={category.cor}
                />
            ))}
        </div>
    );
}

export default CategoriesList;
