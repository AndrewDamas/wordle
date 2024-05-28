import { useSelector } from 'react-redux';
import { TileWrapper } from './Tile.styles'
import { RootState } from '../../../stores/application.store';

const Tile = ({ letter, isAlreadyGuessed, isGreen }: TileProps) => {
  const currentWord = useSelector((state: RootState) => state.wordData.currentWord);

  return (
    <TileWrapper
      isAlreadyGuessed={isAlreadyGuessed}
      isGreen={isGreen}
      isYellow={currentWord.includes(letter)}
    >
      <p>{letter.toUpperCase()}</p>
    </TileWrapper>
  )
}

interface TileProps {
  letter: string;
  isAlreadyGuessed: boolean;
  isGreen: boolean;
}

export default Tile;
