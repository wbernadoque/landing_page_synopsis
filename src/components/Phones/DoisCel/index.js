import { MainCont, DoisCelImg } from './styles';
import doiscel from '../../../images/doiscel.svg';


export default function DoisCel({ type, area, colS, colE, rowS, rowE }) {
  return (
    <MainCont area={area} colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <DoisCelImg src={doiscel}/>
    </MainCont>
  );
}
