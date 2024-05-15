import KeyRow from "../KeyRow/KeyRow"
import { bottomRow, middleRow, topRow } from "../constants/KeyLetters"
import { KeyboardWrapper } from "./Keyboard.styles"

const Keyboard = () => {
    return (
        <KeyboardWrapper>
            {
                <KeyRow row={topRow} />
            }
            {
                <KeyRow row={middleRow} />
            }
            {
                <KeyRow row={bottomRow} />
            }
        </KeyboardWrapper>
    )
}

export default Keyboard