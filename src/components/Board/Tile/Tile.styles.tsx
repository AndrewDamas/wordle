import styled from "@emotion/styled";

interface TileWrapperProps {
    isAlreadyGuessed: boolean;
    isYellow?: boolean;
    isGreen?: boolean;
}

export const TileWrapper = styled.div<TileWrapperProps>(({ isAlreadyGuessed, isYellow, isGreen }) => ({
    width: isAlreadyGuessed ? "54px" : "3.25rem",
    height: isAlreadyGuessed ? "56px" : "3.25rem",
    border: isAlreadyGuessed ? "none" : "2px solid #D3D6DA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    color: isAlreadyGuessed ? "white" : "black",
    backgroundColor:
        isGreen && isAlreadyGuessed ? "#6AAA64"
        : isYellow && isAlreadyGuessed ? "#C9B458"
        : isAlreadyGuessed ? "#787C7E"
        : "transparent",
    p: {
        margin: 0,
    },
}));
