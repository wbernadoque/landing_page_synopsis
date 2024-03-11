import { Container, TextH1, TextH2 } from './styles';

export default function Title({
  tipo,
  texto,
  area,
  colS,
  colE,
  rowS,
  rowE,
  margin,
}) {
  return (
    <Container
      area={area}
      colS={colS}
      colE={colE}
      rowS={rowS}
      rowE={rowE}
      margin={margin}
    >
      {tipo === 'h1' && <TextH1>{texto}</TextH1>}
      {tipo === 'h2' && <TextH2>{texto}</TextH2>}
    </Container>
  );
}
