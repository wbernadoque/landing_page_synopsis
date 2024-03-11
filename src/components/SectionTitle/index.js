import { Container, Text, Shape } from './styles';

export default function SectionTitle({ area, colS, colE, rowS, rowE }) {
  return (
    <Container area={area} colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <Text>FAQ</Text>
      <Shape />
    </Container>
  );
}
