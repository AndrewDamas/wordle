import Key from '../Key/Key'
import { KeyRowWrapper } from './KeyRow.styles'

interface KeyRowProps {
    row: string[]
}

const KeyRow = ({ row }: KeyRowProps) => {
    return (
        <KeyRowWrapper isTopRow={row[0] === "q"}>
            {
                row.map(i => 
                    <Key letter={i} />
                )
            }
        </KeyRowWrapper>
    )
}

export default KeyRow