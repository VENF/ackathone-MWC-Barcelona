import { useState } from "react";
import { useRouter } from "next/router";
import { UserService } from "@domain/services/user.service";
import { handlerForms } from "@infrastructure/handlerForms";
import { Input, Button, Modal } from "@infrastructure/components";
import { LayoutSteps } from "@infrastructure/components/views/Steps/Components";
import { Lock } from "react-feather";
import { Container, Form, Error, LockInfo } from "./style";

export const VerifyAccount = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const { ControllerInput, controlRef, handlerSubmit, errors } = handlerForms();
  const onSubmit = (data) => {
    const { next } = UserService.verifyUser(data);
    if (next) {
      // call api
      // UserService.registrationCompleted()
      setShowModal(true);
    }
  };

  return (
    <LayoutSteps
      back={() => router.push("/register/complete")}
      currentStep="03"
      title="Verifica tu Perfil!"
      subtitle="Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"
      showSubtitle={false}
      section="Verificación por tarjeta"
    >
      <Container>
        <Form onSubmit={handlerSubmit(onSubmit)}>
          {errors?.cardNumber && (
            <Error>{"Ya casi estas ! Ingresa tu numero de tarjeta"}</Error>
          )}
          <ControllerInput
            name="cardNumber"
            control={controlRef}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="number"
                name="cardNumber"
                label="Numero de tarjeta"
                placeholder="Introduce tu numero de tarjeta"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          {errors?.secretCode && <Error>{"Ingresa tu código secreto"}</Error>}
          <ControllerInput
            name="secretCode"
            control={controlRef}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="number"
                name="secretCode"
                label="Código secreto"
                placeholder="Introduce tu código secreto"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          <Button fullSize={true}>Crear cuenta</Button>
        </Form>
        <LockInfo>
          <Lock />
          <p>Tu información es segura</p>
        </LockInfo>
      </Container>
      <Modal
        actions={true}
        action={() => window.location.replace("https://nuwe.io/")}
        actionText="Vamos a Nuwe"
        onClose={() => setShowModal(false)}
        show={showModal}
      >
        <h4>¡Todo guay!</h4>
        <p style={{ margin: "1rem 0rem" }}>
          Tu Cuenta se a creado Correctamente
        </p>
      </Modal>
    </LayoutSteps>
  );
};
