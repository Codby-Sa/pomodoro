import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {

    const { state } = useTaskContext();
      const nextCycle = getNextCycle(state.currentCycle);
      const nextCycleType = getNextCycleType(nextCycle);

    const TipesForWhenActiveTask = {
    workTime: <span>Foque por {state.config.workTime} min</span>,
    shortBreakTime: <span>Descanse por {state.config.shortBreakTime} min</span>,
    longBreakTime: <span>Descanse por {state.config.longBreakTime} min</span>,
  };

  const TipesForNoActiveTask = {
    workTime: <span>Próximo ciclo é de {state.config.workTime} min</span>,
    shortBreakTime: (
      <span>Próximo ciclo é de {state.config.shortBreakTime} min</span>
    ),
    longBreakTime: <span>Próximo ciclo é de {state.config.longBreakTime} min</span>,
  };

  return (
    <>
        {!!state.activeTask && TipesForWhenActiveTask[state.activeTask.type]}
        {!state.activeTask && TipesForNoActiveTask[nextCycleType]}
    </>
    );
}