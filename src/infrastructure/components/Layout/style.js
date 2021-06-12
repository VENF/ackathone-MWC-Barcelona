import styled from "@emotion/styled";
import { keyframes } from "@emotion/react"

export const animated = keyframes`
  from { background-position: 0 0; }
  to { background-position: 100% 0; }
`

export const Container = styled.div({
  height: "100vh",
  display: "grid",
  gridTemplateColumns: ".8fr 1fr",
  overflow: "hidden",
  "@media (max-width: 900px)": {
    gridTemplateColumns: "1fr",
  }
});

export const Frame = styled.div({
  background: "url(/bg2.jpg) no-repeat center",
  backgroundSize: "cover",
  transition: "all ease .3s",
  backgroundPosition: "0px 0px",
  "&:hover": {
    backgroundPosition: "90% 50%",
  },
  "@media (max-width: 900px)": {
    display: "none"
  },
});

export const Wrapper = styled.div({
  width: "100%",
  height: "100%",
  background: "linear-gradient(to left top, #FC3D3D, #FF236399)",
  display: "grid",
  placeItems: "center",
  "& div": {
    padding: "2rem",
    width: "80%",
    "& p": {
      fontSize: "1.4rem",
      color: "#FFF",
      fontWeight: 300
    }
  }
});


export const Content = styled.div({
  padding: "2rem",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});
