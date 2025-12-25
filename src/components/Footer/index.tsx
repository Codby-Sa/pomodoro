import styles from './styles.module.css'


export default function Footer() {
    return <footer className={styles.footer}>
        <a href="">Entenda como funciona a tecnica pomodoro</a>
        <a href="">Chonos pomodoro &copy; {new Date().getFullYear()} - feito com ❤️ </a>
    </footer>
} 