import styled from 'styled-components';

const backTop = (props) => {
  console.log('styled', props);
};
backTop();

export const Container = styled.div`
  grid-area: ${(props) => props.area};
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  margin: 50px auto 20px auto;
  @media (max-width: 768px) {
    text-align: left;
    line-height: 40px;
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
    margin: ${(props) => (props.margin ? props.margin : '50px auto 20px auto')};
  }
`;

export const TextH1 = styled.h1`
  font-size: 56px;
  font-weight: 700;
  line-height: 130%;
  color: white;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const TextH2 = styled.h2`
  font-size: 48px;
  line-height: 130%;
  color: white;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
