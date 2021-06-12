import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

export const Container = styled.div(
  ({ width = "320px", height = "350px", fullWidth = false, img = false }) => ({
    width: fullWidth ? "100%" : width,
    height: height,
    position: "relative",
    ":hover": {
      "& section": {
        transform: `${img ? "translateY(-15px)" : "translateY(-5px)"}`,
        border: `1px solid ${theme.palette.primary}`,
      },
      "& span": {
        transform: `${img ? "translateY(-15px)" : "translateY(-5px)"}`,
        filter: "blur(15px)",
        top: "20px",
      },
      "& img": {
        transform: `${img ? "scale(1.1)" : ""}`,
      },
    },
  })
);

export const Content = styled.section((props) => ({
  border: "1px solid #aab1b466",
  cursor: "pointer",
  width: "100%",
  height: "100%",
  padding: "1rem",
  borderRadius: "5px",
  background: "#FFF",
  transition: "all ease .3s",
  zIndex: 1,
}));

export const Shadow = styled.span({
  position: "absolute",
  top: "10px",
  left: "5%",
  background: "#aab1b466",
  width: "90%",
  height: "100%",
  borderRadius: "5px",
  transition: "all ease .3s",
  filter: "blur(8px)",
  zIndex: -1,
});
