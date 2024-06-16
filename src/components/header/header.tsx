import styles from "./header.module.css";

interface HeaderProps {
    titulo: string
}

export default function Header(props: HeaderProps) {

    return (
        <header className={styles.header}>
            <h1>{ props.titulo }</h1>
        </header>
    )

}