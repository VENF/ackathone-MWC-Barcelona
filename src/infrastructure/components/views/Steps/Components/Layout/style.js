import styled from "@emotion/styled";

export const Container = styled.div({
  padding: "0px",
  height: "80vh",
  width: "100%",
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media (max-width: 900px)": {
    width: "100%",
  },
  "@media (max-width: 500px)": {
    width: "100%",
    alignItems: "initial",
  },
});

export const Content = styled.div({
  padding: "0px",
});
