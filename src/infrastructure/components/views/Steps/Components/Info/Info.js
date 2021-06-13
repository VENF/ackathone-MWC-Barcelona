import { Title, SubTitle, Wrapper } from "./style";
export const Info = ({ title, subtitle, showSubtitle = true }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <SubTitle showSubtitle={showSubtitle}>{subtitle}</SubTitle>
    </Wrapper>
  );
};
