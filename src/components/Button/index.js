import { Container, Text } from './styles';
import download from '../../images/download.svg';

export default function Button({
  icone,
  texto,
  system,
  colS,
  colE,
  rowS,
  rowE,
}) {
  return (
    <>
      <Container colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
        {icone === 'download' && (
          <img
            style={{ margin: '10px -10px 10px 15px' }}
            src={download}
            alt="Baixar aplicativo"
          />
        )}
        {!icone && <Text>{texto}</Text>}
        {icone && <Text>baixar na {system}</Text>}
      </Container>
    </>
  );
}
