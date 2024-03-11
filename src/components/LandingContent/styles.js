import styled from 'styled-components';
import backtop from '../../images/backtop.svg';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 62px;
  grid-area: 'BT';
  grid-column-start: 1;
  grid-column-end: 4;
  @media (max-width: 768px) {
    align-items: flex-end;
    justify-content: flex-end;
    margin-bottom: 32px;
    position: fixed;
    bottom: 40px;
    right: 0;
  }
`;

export const Content = styled.div`
  visibility: ${(props) => (props.mouseScroll > 500 ? 'visible' : 'hidden')};
  max-width: 1600px;
  width: 100%;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 70px 30px 0 0;
  height: 100%;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 10px;
    margin: 15px 0 0 0;
  }
`;
export const Mobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: flex-end;
    align-items: center;
    flex-direction: column-reverse;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: #808191;
  margin: 0 14px;
  @media (max-width: 768px) {
    margin-top: 8px;
  }
`;

export const Icon = styled.div`
  background-image: url(${backtop});
  width: 48px;
  height: 48px;
  background-repeat: no-repeat;
`;
