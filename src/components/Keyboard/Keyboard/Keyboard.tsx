import KeyRow from "../KeyRow/KeyRow"
import { bottomRow, middleRow, topRow } from "../constants/KeyLetters"
import { KeyboardWrapper } from "./Keyboard.styles"

interface KeyboardProps {
    addLetter: (letter: string) => void;
}

const Keyboard = ({ addLetter }: KeyboardProps) => {
    return (
        <KeyboardWrapper>
            {
                <KeyRow
                    addLetter={addLetter}
                    row={topRow}
                />
            }
            {
                <KeyRow
                    addLetter={addLetter}
                    row={middleRow}
                />
            }
            {
                <KeyRow
                    addLetter={addLetter}
                    row={bottomRow}
                />
            }
        </KeyboardWrapper>
    )
}

export default Keyboard