import { useState } from "react";
import { useRouter } from "next/router";
import { UserService } from "@domain/services/user.service";
import { handlerForms } from "@infrastructure/handlerForms";
import { Input, Button, Alert } from "@infrastructure/components";
import { LayoutSteps } from "@infrastructure/components/views/Steps/Components";
import { Globe } from "react-feather";
import { Container, Form, SocialRegister, SocialButton, Error } from "./style";

export const Register = () => {
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
  });
  const router = useRouter();
  const { ControllerInput, controlRef, handlerSubmit, registerInput, errors } =
    handlerForms();

  const onSubmit = (data) => {
    const { next, msg } = UserService.registerUser(data);
    if (next) {
      router.push("/register/complete");
    }
    if (msg) {
      setAlert({
        ...alert,
        show: true,
        msg: msg,
      });
    }
  };

  return (
    <LayoutSteps
      back={() => router.push("/")}
      currentStep="01"
      title="Registra tu cuenta individual"
      subtitle="Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"
      showSubtitle={true}
    >
      {alert.show && <Alert msg={alert.msg} />}
      <Container>
        <Form onSubmit={handlerSubmit(onSubmit)}>
          {errors?.name && <Error>{"Necesitamos tu nombre :("}</Error>}
          <ControllerInput
            name="name"
            control={controlRef}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="text"
                name="name"
                label="Nombre completo*"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          {errors?.email && <Error>{"El correo no puede estar vacio"}</Error>}
          <ControllerInput
            name="email"
            control={controlRef}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="email"
                name="email"
                label="Correo electronico*"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          {errors?.password && (
            <Error>{"¡Eres humano ? Neceistas una contraseña!"}</Error>
          )}
          <ControllerInput
            name="password"
            control={controlRef}
            rules={{ required: true }}
            defaultValue=""
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="password"
                name="password"
                label="Contraseña"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          <label>
            <input
              {...registerInput("terms")}
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
