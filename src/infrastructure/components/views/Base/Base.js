import Link from "next/link";
import { useRouter } from "next/router"
import { Card } from "@infrastructure/components";
import { User, ArrowRight, Briefcase } from "react-feather";
import {
  Container,
  Header,
  SubTitle,
  Title,
  ContentCard,
  WrapperIcons,
  Flow,
  ArrowSelection,
  WrapperCards,
  LoginLink,
} from "./style";

export const Base = () => {
  const router = useRouter()
  const links = [
    {
      title: "Developers",
      subtitle: "Cuenta personal para entrar en el mundo dev",
      action: () => router.push('/register'),
      icon: <User />,
    },
    {
      title: "Business",
      subtitle: "Tienes o perteneces a una compañia",
      action: () => router.push('/register'),
      icon: <Briefcase />,
    },
  ];
  return (
    <div>
      <Header>
        <LoginLink show={true}>
          Ya tienes cuenta ? <Link href="/">Inicia Sesión</Link>
        </LoginLink>
      </Header>
      <Container>
        <div>
          <Title>¡Únete a la comunidad!</Title>
          <SubTitle>Para empezar,dinos que cuenta te gustaria abrir.</SubTitle>
        </div>
        <WrapperCards>
          {links.map(({ title, subtitle, icon, action }, i) => (
            <Card key={i} fullWidth={true} action={action} height="90px">
              <ContentCard>
                <WrapperIcons>{icon}</WrapperIcons>
                <Flow>
                  <h6>{title}</h6>
                  <p>{subtitle}</p>
                </Flow>
                <ArrowSelection>
                  <ArrowRight />
                </ArrowSelection>
              </ContentCard>
            </Card>
          ))}
        </WrapperCards>
        <LoginLink>
          Ya tienes cuenta ? <Link href="/">Inicia Sesión</Link>
        </LoginLink>
      </Container>
    </div>
  );
};
