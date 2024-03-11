import { MainCont, SearchImg } from './styles';
import search from '../../../images/busca.svg';

export default function Search({ type, area, colS, colE, rowS, rowE }) {
  return (
    <MainCont area={area} colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <SearchImg src={search} />
    </MainCont>
  );
}
