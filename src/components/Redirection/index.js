import Header from '../Header';
import {
  Container,
  Content,
  Title,
  Subtitle,
  ProgressPoint,
  ProgressBack,
  ContainerBar,
} from './styles';
import progress from '../../images/progress_bar.svg';

export default function Redirection() {
  function getOperatingSystem(window) {
    if (window.navigator.appVersion.indexOf('Android') !== -1) {
      const link = document.createElement('a');
      link.href =
        'https://play.google.com/store/apps/details?id=com.wbernadoque.SynopsisMobile';
      link.click();
    } else if (window.navigator.appVersion.indexOf('iPhone') !== -1) {
      const link = document.createElement('a');
      link.href = 'itms-apps://itunes.apple.com/br/app/synopsis/id6447589507';
      link.click();
    } else {
      // window.location.href = 'https://www.google.com.br/';
    }
  }

  let system = getOperatingSystem(window);

  return (
    <div className="App">
      <Container>
        <Header />
        <Content>
          <Title>Rumo à próxima página</Title>
          <Subtitle>
            Você está sendo redirecionado para a loja de aplicativos.
          </Subtitle>
          <ContainerBar>
            <ProgressPoint />
            <ProgressBack />
          </ContainerBar>
        </Content>
        {/* <div>{system}</div> */}
      </Container>
    </div>
  );
}
