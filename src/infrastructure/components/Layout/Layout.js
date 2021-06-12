import { Container, Content, Frame, Wrapper } from "./style";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Frame>
        <Wrapper>
          <div>
            <p>
              Nuwe es la plataforma que convierte el desarrollo profesional,
              la búsqueda de trabajo y las conecxionesde personas y empresas en juego.
              Haciendo que puedas centrarte en lo que te gusta,
              programar,diseñar,crear,planear...
            </p>
          </div>
        </Wrapper>
      </Frame>
      <Content>{children}</Content>
    </Container>
  );
};
