import styles from './styles.module.css'

export default function Cycles(){
    return(
        <div className={styles.container}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                <span className={`${styles.dot} ${styles.workTime}`}> </span>
                <span className={`${styles.dot} ${styles.shortBreakTime}`}> </span>
                <span className={`${styles.dot} ${styles.workTime}`}> </span>
                <span className={`${styles.dot} ${styles.shortBreakTime}`}> </span>
                <span className={`${styles.dot} ${styles.workTime}`}> </span>
                <span className={`${styles.dot} ${styles.shortBreakTime}`}> </span>
                <span className={`${styles.dot} ${styles.workTime}`}> </span>
                <span className={`${styles.dot} ${styles.longBreakTime}`}> </span>
            </div>
        </div>
    )
}