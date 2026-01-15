import DeafaultInput from "../DefaultInput";
import Cycles  from "../Cycles";
import DefaultButton  from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";
import { useRef } from 'react';

export function MainForm() {

  const taskNameInput = useRef<HTMLInputElement>(null);

  function handleCreateNewTask (event: React.FormEvent<HTMLFormElement>) { 
    event.preventDefault();
    console.log('Criando nova tarefa');

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