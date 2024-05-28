import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../features/wordData";
import { useWordChecker } from "react-word-checker";
import { RootState } from "../stores/application.store";

const useKeyboardLetterListener = () => {
    const dispatch = useDispatch();
    const { wordExists } = useWordChecker("en");
    const guesses = useSelector((state: RootState) => state.wordData.guesses);
    const currentGuessNumber = useSelector((state: RootState) => state.wordData.currentGuessNumber);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            const key = event.key;
            if (key === "Enter"){
                if(wordExists(guesses[currentGuessNumber - 1].trim()) && guesses[currentGuessNumber - 1].trim().length === 5){
                    dispatch(actions.goToNextGuess());
                }
            } else if (key === "Backspace" || key === "Delete") {
                dispatch(actions.removeFromCurrentGuess());
            } else if (key.length === 1 && key.match(/[a-zA-Z]/i)) {
                dispatch(actions.setCurrentGuess(key));
            }
        };

        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    }, [dispatch, guesses, currentGuessNumber, wordExists]);
};

export default useKeyboardLetterListener;
