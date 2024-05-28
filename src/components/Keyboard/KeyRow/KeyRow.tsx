import Key from '../Key/Key'
import { KeyRowWrapper } from './KeyRow.styles'

interface KeyRowProps {
    row: string[]
    addLetter: (letter: string) => void;
}

const KeyRow = ({ row, addLetter }: KeyRowProps) => {
    return (
        <KeyRowWrapper isTopRow={row[0] === "q"}>
            {
                row.map(i => 
                    <Key
                        letter={i}
                        addLetter={() => addLetter(i) }
                        key={i}
                    />
                )
            }
        </KeyRowWrapper>
    )
}

export default KeyRow