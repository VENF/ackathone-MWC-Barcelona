import { AlertTriangle } from "react-feather";
import { Container } from "./style";
export const Alert = ({ msg }) => {
  return (
    <Container>
      <AlertTriangle width={15} />
      <span style={{ margin: "0rem 5px" }}>{msg}</span>
    </Container>
  );
};
