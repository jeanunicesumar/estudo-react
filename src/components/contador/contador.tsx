import styles from "./contador.module.css";
import React from "react";

interface ContadorProps {
    valorInicial: number
}

export default function Contador(props: ContadorProps) {

    const { valorInicial } = props
    const [contador, setContador] = React.useState(valorInicial);

    function incrementar() {
        setContador(contador + 1);
    }

    function decrementar() {
        if (contador > 0)
            setContador(contador - 1);
    }

    return (
        <div>
            <button className={styles.button} onClick={() => decrementar()}>-</button>
            <span className={styles.span}> {contador} </span>
            <button className={styles.button} onClick={() => incrementar()}>+</button>
        </div>
    )
}