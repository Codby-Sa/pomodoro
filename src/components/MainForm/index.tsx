import DeafaultInput from "../DefaultInput";
import Cycles  from "../Cycles";
import DefaultButton  from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useRef } from 'react';
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function MainForm() {

  const taskNameInput = useRef<HTMLInputElement>(null);
  const {state, setState} = useTaskContext();

  const nextCycle = getNextCycle(state.currentCycle);
  console.log('Next Cycle:', nextCycle);

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
        duration: 1,
        type: 'workTime',

      }

      const secondsRemaining = newTask.duration * 60; 


      setState(prevState => {
        return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining,
        formattedSecondsRemaining:'00:00',
        tasks: [...prevState.tasks, newTask],
        config: {...prevState.config},
        }
      });

      console.log('Criando nova tarefa');
    }

  }

  return (   
      <form onSubmit={handleCreateNewTask} className="form" action="">       
          <div className='formRow'>
           <DeafaultInput ref={taskNameInput} type='text' id='input' labelText='Título' placeholder='Digite Algo'/>

          </div>

          <div className='formRow'>
            <p>Nesse ciclo descanse por 5 minutos</p>
          </div>

          <div className='formRow'>
            <Cycles/>
          </div>

          <div className='formRow'>
            <DefaultButton icon={<PlayCircleIcon/>}/>
          </div>
      </form>
    );
}
