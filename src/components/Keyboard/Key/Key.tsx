import { KeyWrapper } from './Key.styles';

interface KeyProps {
    letter: string;
    addLetter: (letter: string) => void;
}

const Key = ({ letter, addLetter }: KeyProps) => {
    return (
        <KeyWrapper 
            isEnterOrBack={letter === "enter" || letter === "back"}
            onClick={() => addLetter(letter)}
        >
            <p>{letter.toUpperCase()}</p>
        </KeyWrapper>
    )
}

export default Key