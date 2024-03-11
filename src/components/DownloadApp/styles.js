import styled from 'styled-components';
import qrcode from '../../images/qrcode.png';

export const Container = styled.div`
  grid-area: ${(props) => props.area};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 50px auto 10px auto;
  @media (max-width: 768px) {
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
  }
`;

export const QrCode = styled.div`
  background-size: contain;
  background-image: url(${qrcode});
  border-radius: 12px;
  margin-top: 20px;
  background-color: blue;
  width: 200px;
  height: 200px;
  background-repeat: no-repeat;
`;
