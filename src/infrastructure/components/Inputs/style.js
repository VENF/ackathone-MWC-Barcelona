import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

export const Field = styled.input({
  height: "100%",
  width: "100%",
  outline: "none",
  borderRadius: "5px",
  border: "none",
  background: "#E7EBEE",
  padding: "0rem 1rem",
  color: "#2C3E50",
  "&::placeholder": {
    color: theme.palette.secondaryText
  },
  "&:focus": {
    border: `1px solid ${theme.palette.primary}`
  },
});

export const Label = styled.label((props) => ({
  fontSize: ".8rem",
  color: theme.palette.primaryText,
  transition: "all ease .3s",
  position: "relative",
  top: "-7px",
  textTransform: "capitalize"
}));

export const Wrapper = styled.div(
  ({ fullSize = false, width = "200px", height = "40px" }) => ({
    height: height,
    width: fullSize ? "100%" : width,
    outline: "none",
    borderRadius: "5px",
    position: "relative",
    "&:focus-within": {
      "& label": {
        top: "-10px",
        left: "0px",
        color: theme.palette.primary,
      },
    },
  })
);
