import { Title, SubTitle, Wrapper } from "./style";
export const Info = ({ title, subtitle, showSubtitle = true }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {showSubtitle && <SubTitle>{subtitle}</SubTitle>}
    </Wrapper>
  );
};
