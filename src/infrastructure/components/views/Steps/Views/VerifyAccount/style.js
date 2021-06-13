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

export const Error = styled.span({
  color: "red",
  fontWeight: 700,
  fontSize: ".8rem",
});

export const LockInfo = styled.div({
  display: "flex",
  fontSize: ".8rem",
  marginTop: "20px",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.secondaryText,
  "& p": {
    margin: "0rem 1rem",
    color: theme.palette.secondaryText,
  },
});
