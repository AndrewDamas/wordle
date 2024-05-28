import { useDispatch } from 'react-redux';
import './App.css';
import { PageWrapper } from './App.styles';
import Board from './components/Board/Board/Board';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard/Keyboard';
import { actions } from './features/wordData';
import useKeyboardLetterListener from './hooks/useKeyboardLetterListener';

function App() {
  const dispatch = useDispatch();
  useKeyboardLetterListener();

  return (
    <PageWrapper>
      <Header />
      <Board />
      <Keyboard addLetter={(letter: string) => {
        dispatch(actions.setCurrentGuess(letter))
      }}/>
    </PageWrapper>
  )
}

export default App
