import { Btn, Wrapper, Shadow } from "./style";

export const Button = ({
  children,
  fullSize = false,
  width = "100px",
  height = "40px",
  action,
  variant = "contained",
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      fullSize={fullSize}
      outlined={variant === "outlined" ? true : ""}
    >
      {action === undefined ? (
        <Btn outlined={variant === "outlined" ? true : ""}>{children}</Btn>
      ) : (
        <Btn onClick={action} outlined={variant === "outlined" ? true : ""}>{children}</Btn>
      )}
      {variant !== "outlined" ? <Shadow></Shadow> : null}
    </Wrapper>
  );
};
