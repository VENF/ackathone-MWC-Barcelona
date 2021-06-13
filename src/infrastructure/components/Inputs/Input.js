import { Field, Label, Wrapper, SelectInput } from "./style";

export const Input = ({
  fullSize = false,
  width = "200px",
  height = "40px",
  name = "",
  type = "text",
  label = "label",
  placeholder = "",
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
        placeholder={placeholder}
      />
    </Wrapper>
  );
};

export const Select = ({
  fullSize = false,
  width = "200px",
  height = "40px",
  name = "",
  label = "label",
  onChange,
  options = [],
}) => {
  return (
    <Wrapper width={width} height={height} fullSize={fullSize}>
      <Label htmlFor={name}>{label}</Label>
      <SelectInput name={name} onChange={onChange}>
        {options.map((item, i) => (
          <option key={i} value={item}>
            {item}
          </option>
        ))}
      </SelectInput>
    </Wrapper>
  );
};
