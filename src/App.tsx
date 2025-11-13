import './styles/theme.css';
import './styles/global.css';
import Heading from './components/Heading';
import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container';

export function App() {

  return (
    <>
      <Container>
          <Heading> LOGO </Heading>
      </Container>
    
      <Container>
          <section> MENU </section>
      </Container>

      <Container>
          <section> FORM </section>
      </Container>

      <Container>
          <section> FOOTEER </section>
      </Container>
    </>
  )
}
