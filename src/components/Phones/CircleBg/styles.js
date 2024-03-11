import styled from 'styled-components';

export const MainCont = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 40px auto 40px 20px;
  grid-column-start: 2;
  grid-column-end: 3;
  @media (max-width: 768px) {
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
  }
`;

export const CircleBgImg = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  min-width: 450px;
  max-width: 900px;
`;
