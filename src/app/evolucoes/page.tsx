"use client";
import { useSearchParams } from "next/navigation";
import CardSection from "../../components/card-section/card-section";
import { useEffect, useState } from "react";
import styles from './page.module.css'

export default function Evolucoes() {

  const searchParams = useSearchParams();
  const nameEvolucao = searchParams.get('evolucao') || 'squirtle';

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nameEvolucao}`)
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  }, []);
  
  if (data) {
    return (
      <CardSection titulo={ nameEvolucao }>
        <img className={ styles.img } src={data.sprites.front_default}></img>
      </CardSection>
    );
  }

}