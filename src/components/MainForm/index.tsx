import DeafaultInput from "../DefaultInput";
import Cycles from "../Cycles";
import DefaultButton from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { Tips } from "../Tips";
import { showMessage } from "../../adapter/showMessage";

export function MainForm() {
  const taskNameInput = useRef<HTMLInputElement>(null);
  const { state, dispatch } = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  console.log("nextCycleType", nextCycleType);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    showMessage.dismiss();

    if (taskNameInput.current) {
      const taskName = taskNameInput.current.value.trim();
      console.log(taskName);

      if (!taskName) {
        showMessage.warning("O nome da tarefa não pode ser vazio.");
        return;
      }

      const newTask: TaskModel = {
        id: Date.now().toString(),
        name: taskName,
        startDate: Date.now(),
        completeDate: null,
        interruptDate: null,
        duration: state.config[nextCycleType],
        type: nextCycleType,
      };

      dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });

      showMessage.success("Tarefa criada com sucesso!");
    }
  }

  function hanmdleInterruptTask() {
    dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
    showMessage.dismiss();
    showMessage.error("Tarefa interrompida.");
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DeafaultInput
          ref={taskNameInput}
          type="text"
          id="input"
          labelText="Título"
          placeholder="Digite Algo"
          disabled={!!state.activeTask}
        />
      </div>

      <div className="formRow">
        <Tips />
      </div>

      {state.currentCycle > 0 && (
        <div className="formRow">
          <Cycles />
        </div>
      )}

      <div className="formRow">
        {!state.activeTask && (
          <DefaultButton
            type="submit"
            aria-label="Iniciar nova tarefa"
            title="Iniciar nova tarefa"
            icon={<PlayCircleIcon />}
            key="botao_submit"
          />
        )}
        {!!state.activeTask && (
          <DefaultButton
            type="button"
            aria-label="Parar tarefa"
            title="Parar tarefa"
            icon={<StopCircleIcon />}
            color="red"
            onClick={hanmdleInterruptTask}
            key="botao_interrupt"
          />
        )}
      </div>
    </form>
  );
}
