import Header from "../components/header/header";
import CardSection from "../components/card-section/card-section";
import Informacoes from "../components/childrens/informacoes";
import Caracteristicas from "../components/childrens/caracteristicas";
import Curiosidades from "../components/childrens/curiosidades";
import Squirtle from "../components/childrens/squirtle";
import RecursosAdicionais from "../components/childrens/recursos-adicionais";
import Evolucoes from "../components/childrens/evolucoes";
import styles from "./page.module.css";

export default function Home() {

  return (
    <>
    <Header titulo="Squirtle"></Header>
    <main className={styles.main}>
      <CardSection titulo="Informações sobre Squirtle">
        <Informacoes></Informacoes>
      </CardSection>
      <CardSection titulo="Características">
        <Caracteristicas></Caracteristicas>
      </CardSection>
      <CardSection titulo="Curiosidades">
        <Curiosidades></Curiosidades>
      </CardSection>
      <CardSection titulo="Squirtle: O Amigo Aquático">
        <Squirtle></Squirtle>
      </CardSection>
      <CardSection titulo="Recursos Adicionais">
        <RecursosAdicionais></RecursosAdicionais>
      </CardSection>
      <CardSection titulo="Evoluções">
        <Evolucoes></Evolucoes>
      </CardSection>
    </main>
    </>
  );
}
