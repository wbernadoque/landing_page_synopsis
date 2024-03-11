import styled from 'styled-components';

export const MainCont = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 20px auto 20px 20px;
  grid-column-start: 2;
  grid-column-end: 3;

  @media (max-width: 768px) {
    margin: 20px auto;
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
  }
`;

export const ClubImg = styled.img`
  background-repeat: no-repeat;
  min-width: 750px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ClubImgMob = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  max-width: 700px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
