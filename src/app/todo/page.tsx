"use client"
import Contador from '../../components/contador/contador';
import styles from './page.module.css';

export default function todo() {
    return (
        <><h1 className={styles.main}>Todo</h1><Contador valorInicial={1} /></>
    )

}