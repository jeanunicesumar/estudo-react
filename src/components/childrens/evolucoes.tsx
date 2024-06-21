import Link from "next/link";

export default function Evolucoes() {

    return (
      <ul>
        <li>
        <Link href={{ pathname: '/evolucoes', query: { evolucao: 'squirtle' }}}>
            <figure>
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
                alt="Squirtle"
              />
              <figcaption>1. Squirtle</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link href={{ pathname: '/evolucoes', query: { evolucao: 'wartortle' }}}>
            <figure>
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png"
                alt="Wartortle"
              />
              <figcaption>2. Wartortle</figcaption>
            </figure>
          </Link>
        </li>

        <li>
          <Link href={{ pathname: '/evolucoes', query: { evolucao: 'blastoise' }}}>
            <figure>
              <img
                src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
                alt="Blastoise"
              />
              <figcaption>3. Blastoise</figcaption>
            </figure>
          </Link>
        </li>
      </ul>
    );

}