import { useState } from "react";
import { useRouter } from "next/router";
import { UserService } from "@domain/services/user.service";
import { handlerForms } from "@infrastructure/handlerForms";
import { Input, Button, Alert, Select } from "@infrastructure/components";
import { LayoutSteps } from "@infrastructure/components/views/Steps/Components";
import { Lock } from "react-feather";
import { Container, Form, Error, SelectPhone, LockInfo } from "./style";

export const CompleteProfile = () => {
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
  });
  const router = useRouter();
  const { ControllerInput, controlRef, handlerSubmit, errors } = handlerForms();
  const onSubmit = (data) => {
    const { next, msg } = UserService.completeUser(data);
    if (next) {
      router.push("/register/complete/verify");
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
      back={() => router.push("/register")}
      currentStep="02"
      title="Completa tu Perfil!"
      subtitle="Para poder revisar que se trata de una cuenta real, necesitamos la siguiente información"
      showSubtitle={false}
      section="Location"
    >
      {alert.show && <Alert msg={alert.msg} />}
      <Container>
        <Form onSubmit={handlerSubmit(onSubmit)}>
          {errors?.phoneNumber && (
            <Error>{"Necesitamos tu numero de telefono"}</Error>
          )}
          <SelectPhone>
            <ControllerInput
              name="prefix"
              control={controlRef}
              defaultValue="+58"
              render={({ field: { ref, ...rest }, fieldState }) => (
                <Select
                  name="prefix"
                  label="prefijo"
                  height="50px"
                  options={[
                    "+58",
                    "+49",
                    "+54",
                    "+61",
                    "+43",
                    "+32",
                    "+359",
                    "+1",
                    "+57",
                    "+385",
                    "+421",
                    "+386",
                    "+34",
                    "+1",
                    "+372",
                    "+358",
                    "+33",
                    "+30",
                    "+31",
                    "+353",
                    "+354",
                    "+371",
                    "+370",
                    "+352",
                    "+356",
                    "+212",
                    "+52",
                    "+47",
                    "+48",
                    "+351",
                    "+44",
                    "+7",
                    "+46",
                    "+41",
                  ]}
                  fullSize={true}
                  {...rest}
                  {...fieldState}
                />
              )}
            />
            <ControllerInput
              name="phoneNumber"
              control={controlRef}
              defaultValue=""
              rules={{ required: true }}
              render={({ field: { ref, ...rest }, fieldState }) => (
                <Input
                  type="number"
                  name="phoneNumber"
                  label="Numero de telefono"
                  placeholder="Introduce tu numero de telefono"
                  height="50px"
                  fullSize={true}
                  {...rest}
                  {...fieldState}
                />
              )}
            />
          </SelectPhone>

          {errors?.address && (
            <Error>{"Tu dirección no puede estar vacia"}</Error>
          )}

          <ControllerInput
            name="address"
            control={controlRef}
            defaultValue=""
            rules={{ required: true }}
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Input
                type="text"
                name="address"
                label="Dirección"
                placeholder="Introduce tu dirección completa"
                height="50px"
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          <ControllerInput
            name="country"
            control={controlRef}
            defaultValue="Venezuela"
            render={({ field: { ref, ...rest }, fieldState }) => (
              <Select
                name="country"
                label="País de recidencia"
                height="50px"
                options={[
                  "Venezuela",
                  "Alemania",
                  "Argentina",
                  "Australi",
                  "Austria",
                  "Bélgica",
                  "Bulgaria",
                  "Canadá",
                  "Colombia",
                  "Croacia",
                  "Eslovaquia",
                  "Eslovenia",
                  "España",
                  "Estados Unidos",
                  "Estonia",
                  "Finlandia",
                  "Francia",
                  "Grecia",
                  "Holanda",
                  "Irlanda",
                  "Islandia",
                  "Italia",
                  "Letonia",
                  "Lituania",
                  "Luxemburgo",
                  "Malta",
                  "Marruecos",
                  "México",
                  "Noruega",
                  "Polonia",
                  "Portugal",
                  "Reino Unido",
                  "Rusia",
                  "Suecia",
                  "Suiza",
                ]}
                fullSize={true}
                {...rest}
                {...fieldState}
              />
            )}
          />
          <Button fullSize={true}>Guardar y continuar</Button>
        </Form>
        <LockInfo>
          <Lock />
          <p>Tu información es segura</p>
        </LockInfo>
      </Container>
    </LayoutSteps>
  );
};
