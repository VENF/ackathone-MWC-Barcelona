import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "0px",
});

export const Form = styled.form({
  width: "500px",
  display: "grid",
  gap: "2rem",
  marginTop: "1.5rem",
  "@media (max-width: 1040px)": {
    width: "400px",
  },
  "@media (max-width: 500px)": {
    width: "100%",
  },
});

export const SocialRegister = styled.div({
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  marginTop: ".5rem",
  "& p": {
    fontSize: "1.1rem"
  }
});

export const SocialButton = styled.button({
  display: "flex",
  alignItems: "center",
  border: "none",
  marginTop: ".5rem",
  backgroundColor: "transparent",
  cursor: "pointer",
  borderBottom: "1px solid transparent",
  transition: "all ease .3s",
  paddingBottom: "5px",
  outline: "none",
  "&:hover": {
    borderBottom: `1px solid ${theme.palette.primary}`
  },
  "& p": {
    margin: "0rem 2rem"
  }
});
