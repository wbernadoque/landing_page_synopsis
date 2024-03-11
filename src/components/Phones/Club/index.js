import { ClubImg, MainCont, ClubImgMob } from './styles';
import club from '../../../images/club.svg';
import club_mob from '../../../images/club_mob.svg';

export default function Club({ area, colS, colE, rowS, rowE }) {
  return (
    <MainCont area={area} colS={colS} colE={colE} rowS={rowS} rowE={rowE}>
      <ClubImg src={club} />
      <ClubImgMob src={club_mob} />
    </MainCont>
  );
}
