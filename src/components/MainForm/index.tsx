import DeafaultInput from "../DefaultInput";
import Cycles  from "../Cycles";
import DefaultButton  from "../DefaultButton";
import { PlayCircleIcon } from "lucide-react";

export function MainForm() {
    return (
            
    
    <form className="form" action="">

          <div className='formRow'>
           <DeafaultInput type='text' id='input' labelText='Título' placeholder='Digite Algo'/>
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