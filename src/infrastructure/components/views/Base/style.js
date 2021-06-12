import { theme } from "@infrastructure/components/theme"
import styled from "@emotion/styled";

export const Header = styled.div({
  height: "50px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  "@media (max-width: 900px)": {
    display: "none",
  },
});

export const LoginLink = styled.p(({show}) => ({
  color: theme.palette.secondaryText,
  fontSize: "1.1rem",
  display: show ? "inital": "none",
  "& a": {
    color: theme.palette.primary,
    transition: "all ease 0.3s",
    "&:hover": {
      transform: "translateY(-5px)",
    },
  },
  "@media (max-width: 900px)": {
    display: "initial",
  },
}));

export const Container = styled.div({
  padding: "0px",
  height: "80vh",
  width: "80%",
  display: "flex",
  flexFlow: "column",
  alignItems: "center",
  justifyContent: "center",
  "@media (max-width: 900px)": {
    width: "100%",
  },
});

export const Title = styled.h3({
  fontWeight: "500",
  "@media (max-width: 410px)": {
    fontSize: "1.4rem",
  },
});

export const SubTitle = styled.p({
  marginTop: "10px",
  color: theme.palette.secondaryText,
  "@media (max-width: 410px)": {
    fontSize: ".9rem",
  },
});

export const ContentCard = styled.div({
  display: "flex",
  alignItems: "center",
  "&:hover": {
    "& label": {
      opacity: "1",
    },
  },
});

export const WrapperCards = styled.div({
  marginTop: "2rem",
  display: "grid",
  gap: "1rem",
  width: "380px",
  marginBottom: "3rem",
  "@media (max-width: 450px)": {
    width: "100%",
  },
});

export const WrapperIcons = styled.div(({ outline = false }) => ({
  margin: "0rem .5rem",
  color: outline ? theme.palette.primary : "#FFF",
  padding: ".5rem",
  background: outline ? "transparent" : theme.palette.primary,
  border: outline ? `2px solid ${theme.palette.primary}` : "none",
  display: "flex",
  alignItems: "center",
  clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
}));

export const ArrowSelection = styled.label({
  display: "flex",
  alignItems: "center",
  transition: "all ease .3s",
  opacity: "0",
  color: theme.palette.primary,
});

export const Flow = styled.div({
  padding: "0rem .5rem",
  "& p": {
    color: theme.palette.secondaryText,
    fontSize: ".9rem",
    width: "90%"
  },
});
