import styles from './styles.module.css'

export default function Cycles(){
    return(
        <div className={styles.container}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                <span className={styles.dot}> </span>
            </div>
        </div>
    )
}