import { theme } from "@infrastructure/components/theme";
import styled from "@emotion/styled";

export const Title = styled.h3({
  fontWeight: "500",
  "@media (max-width: 410px)": {
    fontSize: "1.4rem",
  },
});

export const SubTitle = styled.p(({ showSubtitle }) => ({
  marginTop: "10px",
  color: theme.palette.secondaryText,
  "@media (max-width: 410px)": {
    fontSize: ".9rem",
  },
  "@media (max-width: 600px)": {
    display: showSubtitle ? "none" : "block",
  },
}));

export const Wrapper = styled.div({
  width: "500px",
  "@media (max-width: 1040px)": {
    width: "400px",
  },
  "@media (max-width: 500px)": {
    width: "100%",
  },
});
