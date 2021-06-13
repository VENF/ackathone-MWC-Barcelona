import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { UserService } from "@domain/services/user.service";
import { handlerForms } from "@infrastructure/handlerForms";
import { Input, Button, Alert, Modal } from "@infrastructure/components";
import { LayoutSteps } from "@infrastructure/components/views/Steps/Components";
import { Container, Form, SocialRegister, SocialButton, Error } from "./style";

export const Register = () => {
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
  });
  const router = useRouter();
  const { ControllerInput, controlRef, handlerSubmit, registerInput, errors } =
    handlerForms();

  const onSubmit = (data) => {
    const { next, msg, email } = UserService.registerUser(data);
    if (next) {
      router.push("/register/complete");
    }
    if (!email) {
      setShowModal(true);
    }
    if (msg && email === undefined) {
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
      section="Personal Info."
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
                label="Nombre completo"
                placeholder="Nombre completo"
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
                type="text"
                name="email"
                label="Correo electronico"
                placeholder="Correo electronico"
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
                placeholder="Contraseña"
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
            <Image src="/iconGoogle.svg" alt="google" width={20} height={20} />
            <p>Registrate con Google</p>
          </SocialButton>
        </SocialRegister>
      </Container>
      <Modal onClose={() => setShowModal(false)} show={showModal}>
        <h4>¡Ups, Algo a salido mal!</h4>
        <p style={{ margin: "1rem 0rem" }}>
          Parece que el correo introducido ya está en uso. Porfavor, revísalo y
          vuelve a intentarlo de nuevo
        </p>
      </Modal>
    </LayoutSteps>
  );
};
