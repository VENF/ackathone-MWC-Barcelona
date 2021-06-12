import { Container, Content, Shadow } from "./style";
export const Card = ({
  width = "320px",
  height = "",
  children,
  fullWidth = false,
  action
}) => {
  return (
    <Container onClick={action} width={width} height={height} fullWidth={fullWidth}>
      <Content>{children}</Content>
      <Shadow></Shadow>
    </Container>
  );
};
