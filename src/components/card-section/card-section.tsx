import React from "react"
import styles from "./card-section.module.css"


interface CardSectionProps {
    titulo: string
    children: React.ReactNode
}

export default function CardSection(props: CardSectionProps) {

    return (
        <section className={styles.section}>
            <h2>{props.titulo}</h2>
            {props.children}
        </section>
    )

}