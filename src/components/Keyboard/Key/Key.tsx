import { KeyWrapper } from './Key.styles';

interface KeyProps {
    letter: string;
}

const Key = ({ letter }: KeyProps) => {
    return (
        <KeyWrapper isEnterOrBack={letter === "enter" || letter === "back"}>
            <p>{letter.toUpperCase()}</p>
        </KeyWrapper>
    )
}

export default Key