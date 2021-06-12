import { ChevronLeft } from "react-feather";
import { Header, CountSteps, Back, WrapperIcon } from "./style";
export const HeaderSteps = ({ currentStep = "01" }) => {
  return (
    <Header>
      <Back>
        <WrapperIcon>
          <ChevronLeft/>
        </WrapperIcon>
        <p>Volver</p>
      </Back>
      <CountSteps>
        <span>Paso {currentStep}/03</span>
        <p>Personal Info.</p>
      </CountSteps>
    </Header>
  );
};
