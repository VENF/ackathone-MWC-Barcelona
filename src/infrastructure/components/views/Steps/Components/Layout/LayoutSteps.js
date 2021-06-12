import { HeaderSteps } from "../Header";
import { Info } from "../Info";
import { Container, Content } from "./style";
export const LayoutSteps = ({
  children,
  currentStep = "01",
  title,
  subtitle,
  showSubtitle = true,
}) => {
  return (
    <div>
      <HeaderSteps currentStep={currentStep} />
      <Container>
        <Info
          title={title}
          subtitle={subtitle}
          showSubtitle={showSubtitle}
        />
        <Content>{children}</Content>
      </Container>
    </div>
  );
};
