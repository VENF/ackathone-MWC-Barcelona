import { handlerForms } from "@infrastructure/handlerForms";
import { Input, Button } from "@infrastructure/components";
import { LayoutSteps } from "@infrastructure/components/views/Steps/Components";
import { Globe } from "react-feather";
import { Container, Form, SocialRegister, SocialButton } from "./style";
export const Register = () => {
  const { ControllerInput, controlRef, handlerSubmit, registerInput } =
    handlerForms();
  const onSubmit = (data) => console.log(data);
  return (
    <LayoutSteps
      currentStep="01"
      title="Registra tu cuenta individual"
      subtitle="Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"
      showSubtitle={true}
    >
      <Container>
        <Form onSubmit={handlerSubmit(onSubmit)}>
          <ControllerInput
            name="name"
            control={controlRef}
            defaultValue=""
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="text"
                name="name"
                label="name"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          <ControllerInput
            name="email"
            control={controlRef}
            defaultValue=""
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="email"
                name="email"
                label="email"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          <ControllerInput
            name="password"
            control={controlRef}
            defaultValue=""
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="password"
                name="password"
                label="password"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          <label>
            <input
              {...registerInput("gender")}
              type="checkbox"
              id="cbox1"
              value="Acepto los terminos y condiciones"
            />{" "}
            Acepto los terminos y condiciones
          </label>
          <Button fullSize={true}>Registrar cuenta</Button>
        </Form>
        <SocialRegister>
          <p>o</p>
          <SocialButton>
            <Globe />
            <p>Registrate con Google</p>
          </SocialButton>
        </SocialRegister>
      </Container>
    </LayoutSteps>
  );
};
