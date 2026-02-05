import DeafaultInput from "../DefaultInput";
import Cycles  from "../Cycles";
import DefaultButton  from "../DefaultButton";
import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { useRef } from 'react';
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {

  const taskNameInput = useRef<HTMLInputElement>(null);
  const {state, setState} = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  console.log('nextCycleType', nextCycleType);


  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) { 
    event.preventDefault();

    if (taskNameInput.current) {

      const taskName = taskNameInput.current.value.trim();
      console.log(taskName);

      if (!taskName) {
        alert('O nome da tarefa não pode ser vazio.');
        return;
      } 

      const newTask : TaskModel = {
        id: Date.now().toString(),
        name: taskName,
        startDate: Date.now(),
        completeDate: null,
        interruptDate: null,
        duration: state.config[nextCycleType],
        type: nextCycleType,

      }

      const secondsRemaining = newTask.duration * 60; 


      setState(prevState => {
        return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
        config: {...prevState.config},
        }
      });

      console.log('Criando nova tarefa');
    }

  }

  function hanmdleInterruptTask() {
    setState(prevState => {
      return {
      ...prevState,
      activeTask: null,
      secondsRemaining: 0,
      formattedSecondsRemaining: '00:00',
      tasks: prevState.tasks.map(task => {
        if ( prevState.activeTask &&  prevState.activeTask.id === task.id) {
          return {
            ...task,
            interruptDate: Date.now(),
          }
        }
        return task;  
      }),
    };
    });
  }

  return (   
      <form onSubmit={handleCreateNewTask} className="form" action="">       
          <div className='formRow'>
           <DeafaultInput 
           ref={taskNameInput} 
           type='text' 
           id='input' 
           labelText='Título' 
           placeholder='Digite Algo'
           disabled={!!state.activeTask}
          />

          </div>

          <div className='formRow'>
            <p>Próximo ciclo é {nextCycleType} de duração {state.config[nextCycleType]} minutos</p>
          </div>

          {state.currentCycle > 0 &&(
          <div className='formRow'>
            <Cycles/>
          </div>
          )}

        <div className='formRow' >
          {!state.activeTask && (
            <DefaultButton 
              type='submit' 
              aria-label="Iniciar nova tarefa" 
              title="Iniciar nova tarefa"
              icon={<PlayCircleIcon/>}
              key="botao_submit"
            />
          )}
            {!!state.activeTask && (
            <DefaultButton 
              type='button' 
              aria-label="Parar tarefa" 
              title="Parar tarefa"
              icon={<StopCircleIcon/>}
              color='red'
              onClick={hanmdleInterruptTask}
              key="botao_interrupt"
            />
          )}
        </div>
      </form>
    );
}
