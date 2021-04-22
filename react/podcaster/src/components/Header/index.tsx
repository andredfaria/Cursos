import styles from "./styles.module.scss";
import format  from "date-fns/format";
import ptBR from "date-fns/locale/pt-BR";

export function Header() {
  let data = format(new Date(), "EEEEEE, d MMMM", { locale: ptBR} )

  return (
    <header className={styles.headerContainer}>
      <img src="/logo.svg" alt="Podcaster" />
      
      <p>O melhor para você ouvir, sempre</p>

      <span>{data}</span>
    </header>
  )
}