import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import Logo from './components/Logo';
import Menu from './components/Menu';
import CountDown from './components/CountDown';
import DeafaultInput from './components/DefaultInput';
import Cycles from './components/Cycles';

export function App() {

  return (
    <>

      <Container>
        <Logo/>
      </Container>
    
      <Container>
        <Menu/>
      </Container>

      <Container>
        <CountDown/>
      </Container>

      <Container>
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
            <button>enviar</button>
          </div>

        </form>
      </Container>
      
    </>
  )
}
