import { useState } from 'react';
import Header from '../../components/Header';
import InputForm from '../../components/InputForm';
import Label from '../../components/Label';
import { ButtonAPP, TextBtn } from '../DeepLink/styles';
import {
  Container,
  Content,
  Title,
  HeadContent,
  TextInfo,
  BackToHome,
  FormContent,
} from './styles';

export default function Contato() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [title, setTitle] = useState();
  const [message, setMessage] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Componha a URL do mailto usando as informações do formulário
    const mailtoUrl = `mailto:synopsis.contato@gmail.com?subject=Contato&body=Nome: ${name}%0D%0AEmail: ${email}%0D%0AAssunto: ${title}%0D%0AMessage: ${message}`;

    // Abra um novo e-mail no cliente de e-mail padrão do usuário
    window.location.href = mailtoUrl;
  };

  return (
    <Container>
      <Header />
      <Content>
        <HeadContent>
          <Title>Contate-nos</Title>
          <TextInfo>
            Alguma dúvida, crítica ou sugestão? Nos envie uma mensagem!
          </TextInfo>
          <BackToHome>voltar para tela inicial</BackToHome>
        </HeadContent>
        <FormContent>
          <InputForm
            label="Nome"
            placeholder="Seu nome"
            type="txt"
            onChange={setName}
          />
          <InputForm
            label="E-mail"
            placeholder="seuemail@email.com"
            type="txt"
            onChange={setEmail}
          />
          <InputForm
            label="Assunto"
            placeholder="ex. Como criar um clube?"
            type="txt"
            onChange={setTitle}
          />
          <InputForm
            label="Mensagem"
            placeholder="Como podemos te ajudar?"
            type="area"
            onChange={setMessage}
          />
        </FormContent>
        <ButtonAPP width="100%" onClick={handleSubmit}>
          <TextBtn>Enviar email</TextBtn>
        </ButtonAPP>
      </Content>
    </Container>
  );
}
