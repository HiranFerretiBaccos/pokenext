import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.card}>
      <Image
        // src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width="100"
        height="100"
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} legacyBehavior>
        <a className={styles.btn}>Detalhes</a>
      </Link>
    </div>
  );
}
