import styles from "./styles.module.scss";
import format  from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";
import Link from 'next/link';

export function Header() {
  let data = format(new Date(), "EEEEEE, d MMMM", { locale: ptBR} )

  return (
    <header className={styles.headerContainer}>
      <Link href='/'>
        <img src="/logo.svg" alt="Podcaster" />
      </Link>
      
      <p>O melhor para você ouvir, sempre</p>

      <span>{data}</span>
    </header>
  )
}