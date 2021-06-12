import { useForm, Controller } from "react-hook-form";

export const handlerForms = () => {
  const {register, handleSubmit, control, formState: { errors } } = useForm();
  return {
    handlerSubmit: handleSubmit,
    controlRef: control,
    ControllerInput: Controller,
    errors: errors,
    registerInput: register
  };
};
