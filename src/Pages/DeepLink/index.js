import { useEffect, useRef, useState } from 'react';
import Header from '../../components/Header';
import {
  Container,
  Content,
  Title,
  Subtitle,
  ImgKey,
  ButtonAPP,
  TextBtn,
} from './styles';
import deeplink from '../../images/deeplink.png';

export default function DeepLink({ type }) {
  const [subtitleText, setSubtitleText] = useState('');
  useEffect(() => {
    let text =
      type === 'redefinir'
        ? 'Clique no botão abaixo para acessar o aplicativo e redefinir sua senha.'
        : 'Clique no botão abaixo para acessar o aplicativo e acessar o clube.';
    setSubtitleText(text);
  }, [type]);

  useEffect(() => {
    const link = document.createElement('a');
    link.href = window.location.search.replace('?', '');
    link.click();
  }, []);

  const getOperatingSystem = () => {
    window.location.href = window.location.search.replace('?', '');
  };

  return (
    <div className="App">
      <Container>
        <Header />
        <Content>
          <ImgKey src={deeplink} />

          <Title>Seu acesso está quase lá</Title>
          <Subtitle>{subtitleText}</Subtitle>
          <ButtonAPP onClick={getOperatingSystem}>
            <TextBtn>Ir para aplicativo</TextBtn>
          </ButtonAPP>
        </Content>
      </Container>
    </div>
  );
}
