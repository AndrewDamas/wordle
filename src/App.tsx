import './App.css';
import { PageWrapper } from './App.styles';
import Board from './components/Board/Board/Board';
import Header from './components/Header/Header';
import Keyboard from './components/Keyboard/Keyboard/Keyboard';
import { useState } from "react";

function App() {
  const [guess, setGuess] = useState();
  return (
    <PageWrapper>
      <Header />
      <Board />
      <Keyboard addLetter={() => setGuess}/>
    </PageWrapper>
  )
}

export default App
