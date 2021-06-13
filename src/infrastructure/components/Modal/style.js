import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

export const Body = styled.div({
  paddingTop: "10px",
});

export const Clouse = styled.button({
  width: "100px",
  height: "40px",
  border: `1px solid ${theme.palette.primary}`,
  borderRadius: "5px",
  fontSize: "1rem",
  fontWeight: 500,
  background: "#FFF",
  color: theme.palette.secondaryText,
  cursor: "pointer",
  outline: "none",
  transition: "all ease .3s",
  "&:hover": {
    backgroundColor: theme.palette.primary,
    color: "#FFF",
  },
});

export const Content = styled.div({
  background: "#FFF",
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  padding: "15px",
  zIndex: 100,
  position: "relative",
});

export const Overlay = styled.div({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(0,0,0,0.5)",
});

export const Filter = styled.div({
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  background: "#FFFFFFAA",
  backdropFilter: "blur(2px)",
  zIndex: 1,
});

export const ModalWrapper = styled.div({
  width: "400px",
  height: "200px",
});

export const Flow = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "1rem",
  padding: "0rem 1rem",
});
