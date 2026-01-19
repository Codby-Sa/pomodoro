import { useTaskContext } from '../../contexts/TaskContext/useTaskContext'
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import styles from './styles.module.css'

export default function Cycles(){

    const {state} = useTaskContext();

    const cycleStep = Array.from({length: state.currentCycle});

    const indicadorCycle = {
        workTime: 'Ciclo de Trabalho',
        shortBreakTime: 'Ciclo de Descanso Curto',
        longBreakTime: 'Ciclo de Descanso Longo',
    };

    return(
        <div className={styles.container}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const nextCycleType = getNextCycleType(nextCycle);
                    return (
                        <span 
                        key={`${nextCycleType}_${nextCycle}`}
                        className={`${styles.dot} ${styles[nextCycleType]}`} 
                        aria-label={indicadorCycle[nextCycleType]}
                        title={indicadorCycle[nextCycleType]}>
                        </span>
                    );

                })}
            </div>
        </div>
    )
}