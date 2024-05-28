import { BoardWrapper } from "./Board.styles"
import TileRow from "../TileRow/TileRow"
import { useSelector } from "react-redux"
import { RootState } from "../../../stores/application.store"

const Board = () => {

    const guesses = useSelector((state: RootState) => state.wordData.guesses)
    const currentGuessNumber = useSelector((state: RootState) => state.wordData.currentGuessNumber)

    return (
        <BoardWrapper>
            {
                guesses.map((i, index) => 
                    <TileRow
                        key={index}
                        word={i}
                        isAlreadyGuessed={
                            currentGuessNumber <= 5
                            ? guesses.findIndex(guess => guess === guesses[currentGuessNumber - 1]) > index
                            : true
                        }
                    />
                )
            }
        </BoardWrapper>
    )
}

export default Board