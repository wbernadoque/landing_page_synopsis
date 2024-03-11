import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ${(props) => props.area};
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row: auto;
  display: flex;
  margin: 0 auto;
  @media (max-width: 768px) {
    margin: 0;
    text-align: left;
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
    margin: ${(props) => (props.margin ? props.margin : '0 0')};
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 200%;
  color: white;
  margin: 0;
  @media (max-width: 768px) {
    text-align: left;
    line-height: 32px;
    font-size: 16px;
  }
`;
