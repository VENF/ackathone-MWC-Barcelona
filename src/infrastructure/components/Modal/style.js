import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

export const Body = styled.div({
  paddingTop: "10px",
});

export const Header = styled.div({
  display: "flex",
  justifyContent: "flex-end",
  fontSize: "25px",
});

export const Clouse = styled.button({
  width: "40px",
  height: "30px",
  position: "relative",
  top: "-20px",
  right: "-20px",
  borderRadius: "20px",
  fontSize: "1.5rem",
  fontWeight: 500,
  background: "#FFF",
  color: theme.palette.secondaryText,
  border: "none",
  cursor: "pointer",
  outline: "none",
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
  width: "500px", height: "400px"
});
