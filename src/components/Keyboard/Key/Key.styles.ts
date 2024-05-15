import styled from "@emotion/styled";

interface KeyWrapperProps {
    isEnterOrBack: boolean;
}

export const KeyWrapper = styled.button<KeyWrapperProps>(({ isEnterOrBack }) => ({
    height: "58px",
    width: isEnterOrBack ? "65px" : "43px",
    backgroundColor: "#D3D6DA",
    color: "black",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: isEnterOrBack ? "12px" : "20px",
    border: "none",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    lineHeight: 1.5,
    fontWeight: 700,
    cursor: "pointer",
}));
