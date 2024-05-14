import Tile from "../Tile/Tile";
import { TileRowWrapper } from "./TileRow.styles"

const TileRow = () => {
    return (
        <TileRowWrapper>
            {
                [1, 2, 3, 4, 5].map(i => 
                    <Tile key={i} />
                )
            }
        </TileRowWrapper>
    )
}

export default TileRow;
