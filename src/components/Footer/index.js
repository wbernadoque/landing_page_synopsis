import {
  Container,
  LogoImg,
  Social,
  Title,
  Icons,
  Linkedin,
  Twitter,
  Insta,
  Logo,
  Content,
} from './styles';

export default function Footer() {
  return (
    <Container>
      <Content>
        <Logo>
          <LogoImg />
        </Logo>
        <Social>
          <Title>siga-nos</Title>
          <Icons>
            <Insta />
            <Linkedin />
            <Twitter />
          </Icons>
        </Social>
      </Content>
    </Container>
  );
}
