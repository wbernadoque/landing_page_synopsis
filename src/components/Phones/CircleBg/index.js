import { CircleBgImg, MainCont } from './styles';
import circle from '../../../images/circle.svg';

export default function CircleBg({ type, area, colS, colE, rowS, rowE }) {
  return (
    <MainCont area={area} colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <CircleBgImg src={circle} />
    </MainCont>
  );
}
