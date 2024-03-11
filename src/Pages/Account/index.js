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
  ContentToReverse,
} from './styles';

export default function Account() {
  const getOperatingSystem = () => {
    if (
      window.navigator.appVersion.indexOf('Android') !== -1 ||
      window.navigator.appVersion.indexOf('iPhone') !== -1
    ) {
      window.location.href = 'bcsy://--/';
    } else {
      alert('Acesse pelo seu smartphone');
    }
  };

  return (
    <Container>
      <Header />
      <Content>
        <HeadContent style={{ alignItems: 'center' }}>
          <Title>Excluir conta</Title>
          <ContentToReverse>
            <TextInfo style={{ maxWidth: 656 }}>
              Clique no botão abaixo para acessar o aplicativo e excluir sua
              conta. Ao excluir sua conta todos os seus dados e históricos serão
              removidos. Essa ação não poderá ser desfeita.
            </TextInfo>
            <BackToHome to={'/'}>voltar para tela inicial</BackToHome>
          </ContentToReverse>
        </HeadContent>
        <ButtonAPP onClick={getOperatingSystem} width="328px">
          <TextBtn>ir para aplicativo</TextBtn>
        </ButtonAPP>
      </Content>
    </Container>
  );
}
