import { useDispatch, useSelector } from "react-redux"
import { HeaderWrapper } from "./Header.styles"
import { actions } from "../../features/wordData";
import fetchWord from "../../services/fetchWord";
import { RootState } from "../../stores/application.store";

const Header = () => {
    const dispatch = useDispatch();
    const currentWord = useSelector((state: RootState) => state.wordData.currentWord);
    const previousWords = useSelector((state: RootState) => state.wordData.previousWords);
    const currentGuessNumber = useSelector((state: RootState) => state.wordData.currentGuessNumber)

    const nextWord = async () => {
        dispatch(actions.addToPreviousWords(currentWord));
        dispatch(actions.clearGuesses());

        let newWord = "";
        let isWordUnique = false;

        while (!isWordUnique) {
            const data = await fetchWord();
            if (!previousWords.includes(data)) {
                newWord = data;
                isWordUnique = true;
            }
        }

        dispatch(actions.setCurrentWord(newWord));
        dispatch(actions.resetCurrentGuessNumber());
    };



    return (
        <HeaderWrapper>
            <p>Wordle</p>
            <button onClick={nextWord}>next</button>
            <p>{currentGuessNumber > 5 && currentWord}</p>
        </HeaderWrapper>
    )
}

export default Header