import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 50px;
  border-radius: 25px;
  border: none;
  color: white;
  background-color: var(--primary);
  grid-column-start: 2;
  grid-column-end: 3;
  margin: 40px auto 0 auto;
  @media (max-width: 768px) {
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin: 0 20px;
`;
