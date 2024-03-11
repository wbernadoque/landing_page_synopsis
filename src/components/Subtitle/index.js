import { Container, Text } from './styles';

export default function Title({ texto, area, colS, colE, rowS, rowE, margin }) {
  return (
    <Container
      area={area}
      colS={colS}
      colE={colE}
      rowS={rowS}
      rowE={rowE}
      margin={margin}
    >
      <Text>{texto}</Text>
    </Container>
  );
}
