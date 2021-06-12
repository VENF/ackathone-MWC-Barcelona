import { Field, Label, Wrapper } from "./style";

export const Input = ({
  fullSize = false,
  width = "200px",
  height = "40px",
  name = "",
  type = "text",
  label = "label",
  onChange,
}) => {
  return (
    <Wrapper width={width} height={height} fullSize={fullSize}>
      <Label htmlFor={name}>{label}</Label>
      <Field
        onChange={onChange}
        autocomplete="off"
        type={type}
        name={name}
        placeholder={name}
      />
    </Wrapper>
  );
};
