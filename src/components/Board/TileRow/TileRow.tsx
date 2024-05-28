import { useEffect, useState } from "react";
import Tile from "../Tile/Tile";
import { TileRowWrapper } from "./TileRow.styles"
import { useSelector } from "react-redux";
import { RootState } from "../../../stores/application.store";

const TileRow = ({ word, isAlreadyGuessed }: TileRowProps) => {

    const [currentWord, setCurrentWord] = useState<string>("     ");
    const currentSelectedWord = useSelector((state: RootState) => state.wordData.currentWord);

    useEffect(() => {
        if (word) {
            setCurrentWord(word);
        } else {
            setCurrentWord("     ");
        }
    }) 

    return (
        <TileRowWrapper>
            {
                currentWord.split("").map((i, index) => 
                    <Tile
                        key={index}
                        letter={String(i)}
                        isAlreadyGuessed={isAlreadyGuessed}
                        isGreen={currentSelectedWord.split("").findIndex(letter => letter === i) === index}
                    />
                )
            }
        </TileRowWrapper>
    )
};

interface TileRowProps {
    word: string | null;
    isAlreadyGuessed: boolean;
}

export default TileRow;
