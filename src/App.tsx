import './App.css';
import { PageWrapper } from './App.styles';
import Board from './components/Board/Board/Board';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard/Keyboard';

function App() {
  return (
    <PageWrapper>
      <Header />
      <Board />
      <Keyboard />
    </PageWrapper>
  )
}

export default App
