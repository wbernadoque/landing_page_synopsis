import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ${(props) => props.area};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  @media (max-width: 768px) {
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
  }
`;

export const Text = styled.p`
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin: 0 20px;
`;

export const Shape = styled.div`
  width: 66px;
  height: 4px;
  margin-top: 8px;
  border-radius: 3px;
  background-color: var(--primary);
`;
