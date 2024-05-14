// import { useState } from "react"
import { BoardWrapper } from "./Board.styles"
import TileRow from "../TileRow/TileRow"

const Board = () => {

    // const [guesses, setGuesses] = useState([])

    return (
        <BoardWrapper>
            {
                [1, 2, 3, 4, 5].map((i) => 
                    <TileRow key={i}/>
                )
            }
        </BoardWrapper>
    )
}

export default Board