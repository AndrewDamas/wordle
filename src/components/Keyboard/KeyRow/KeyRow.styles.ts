import styled from "@emotion/styled";

interface KeyRowWrapperProps {
    isTopRow: boolean;
}

export const KeyRowWrapper = styled.div<KeyRowWrapperProps>(({ isTopRow }) => ({
    display: "flex",
    gap: isTopRow ? "6px" : "7px"
}));
