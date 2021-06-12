import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

/** Wrappers */
export const WrapperIcon = styled.div({
  marginRight: "1rem",
  display: "flex",
  alignItems: "center",
  transition: "all ease .3s",
  "@media (max-width: 600px)": {
    marginRight: "0px",
  },
});

/** Wrappers */

export const Header = styled.div({
  height: "50px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  "@media (max-width: 600px)": {
    padding: "0px",
  },
});

export const Back = styled.button({
  display: "flex",
  alignItems: "center",
  border: "none",
  background: "transparent",
  cursor: "pointer",
  outline: "none",
  "& p": {
    transition: "all ease .3s",
  },
  "&:hover": {
    "& p": {
      color: theme.palette.primary,
    },
    "& div": {
      color: theme.palette.primary,
    },
  },
});

export const CountSteps = styled.div({
  "& span": {
    color: theme.palette.secondaryText,
    fontSize: ".9rem",
  },
});
