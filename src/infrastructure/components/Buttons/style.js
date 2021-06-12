import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

export const Wrapper = styled.div(
  ({
    fullSize = false,
    width = "100px",
    height = "40px",
    outlined = false,
  }) => ({
    display: "flex",
    width: fullSize ? "100%" : width,
    height: height,
    position: "relative",
    padding: outlined ? "1px 2px 2px 1px" : "",
    borderRadius: "5px",
    transition: "all ease .3s",
    background: outlined
      ? `linear-gradient(to left, ${theme.palette.primary}, ${theme.palette.secondary}`
      : "transparent",
    ":hover": {
      transform: outlined ? "translateY(-5px)" : "",
      "& div": {
        filter: "blur(10px)",
      },
      "& button": {
        transform: outlined ? "" : "translateY(-5px)",
      },
    },
  })
);
export const Btn = styled.button(({ outlined = false }) => ({
  width: "100%",
  height: "100%",
  textTransform: "capitalize",
  border: "none",
  color: outlined ? theme.palette.primaryText : "#FFF",
  fontWeight: 700,
  borderRadius: "5px",
  zIndex: 100,
  cursor: "pointer",
  transition: "all ease .3s",
  outline: "none",
  background: outlined
  ? "#FFF"
  : "linear-gradient(to right, #FC3D3D, #FF2363)",
}));



export const Shadow = styled.div({
  position: "absolute",
  top: "3px",
  left: "8%",
  background: theme.palette.primary,
  width: "85%",
  height: "100%",
  borderRadius: "5px",
  filter: "blur(5px)",
  transition: "all ease .3s",
});
