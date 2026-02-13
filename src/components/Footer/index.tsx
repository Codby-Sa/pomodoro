import styles from "./styles.module.css";
import { RouterLink } from "../RouterLink";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro">Entenda como funciona a tecnica pomodoro</RouterLink>
      <RouterLink href="/">
        Chonos pomodoro &copy; {new Date().getFullYear()} - feito com ❤️{" "}
      </RouterLink>
    </footer>
  );
}
