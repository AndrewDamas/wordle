import { useDispatch, useSelector } from 'react-redux';
import { KeyWrapper } from './Key.styles';
import { actions } from '../../../features/wordData';
import { RootState } from '../../../stores/application.store';
import { useWordChecker } from 'react-word-checker';
import { useEffect, useState } from 'react';

interface KeyProps {
    letter: string;
    addLetter: (letter: string) => void;
}

const Key = ({ letter, addLetter }: KeyProps) => {
    const dispatch = useDispatch();
    const guesses = useSelector((state: RootState) => state.wordData.guesses);
    const currentGuessNumber = useSelector((state: RootState) => state.wordData.currentGuessNumber);
    const currentWord = useSelector((state: RootState) => state.wordData.currentWord);
    const { wordExists } = useWordChecker("en");

    const [isGreen, setIsGreen] = useState(false);
    const [isYellow, setIsYellow] = useState(false);
    const [isGuessedAlready, setIsGuessedAlready] = useState(false);

    useEffect(() => {
        guesses.forEach(guess => {
            if (guess.includes(letter)) {
                const foundIndex = guess.split("").findIndex(i => i === letter);
                if (currentWord.split("")[foundIndex] === letter) {
                    setIsGreen(true);
                } else {
                    setIsYellow(true);
                }
                if (!isGreen && !isYellow) {
                    setIsGuessedAlready(true);
                }
            }
        });
    }, [isGreen, guesses, isYellow, isGuessedAlready, letter])

    return (
        <KeyWrapper 
            isEnterOrBack={letter === "enter" || letter === "back"}
            isGreen={isGreen}
            isYellow={isYellow}
            isGuessedAlready={isGuessedAlready}
            onClick={() => {
                if (letter === "enter") {
                    if(wordExists(guesses[currentGuessNumber - 1].trim()) && guesses[currentGuessNumber - 1].trim().length === 5){
                        dispatch(actions.goToNextGuess());
                    }
                } else if (letter === "back") {
                    dispatch(actions.removeFromCurrentGuess());
                } else {
                    addLetter(letter);
                }
            }}
        >
            <p>{letter.toUpperCase()}</p>
        </KeyWrapper>
    )
}

export default Key