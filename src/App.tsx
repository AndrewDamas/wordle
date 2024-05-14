import './App.css';
import { PageWrapper } from './App.styles';
import Board from './components/Board/Board/Board';
import Header from './components/Header/Header';

function App() {
  return (
    <PageWrapper>
      <Header />
      <Board />
    </PageWrapper>
  )
}

export default App
