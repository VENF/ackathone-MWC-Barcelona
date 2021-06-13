import { ChevronLeft } from "react-feather";
import { Header, CountSteps, Back, WrapperIcon } from "./style";
export const HeaderSteps = ({ currentStep = "01", back, section = "" }) => {
  return (
    <Header>
      <Back onClick={back}>
        <WrapperIcon>
          <ChevronLeft />
        </WrapperIcon>
        <p>Volver</p>
      </Back>
      <CountSteps>
        <span>Paso {currentStep}/03</span>
        <p>{section}</p>
      </CountSteps>
    </Header>
  );
};
