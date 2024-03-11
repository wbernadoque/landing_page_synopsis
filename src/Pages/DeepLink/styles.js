import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--blackbg);
  position: relative;
  color: #fbfbfb;
  max-width: 1600px;
`;

export const Content = styled.div`
  background-color: var(--blackbg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin: 50px auto;
`;
export const Title = styled.h2`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const Subtitle = styled.p`
  font-size: 18px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const ImgKey = styled.img`
  width: 100%;
  background-repeat: no-repeat;
  max-width: 300px;
`;

export const ButtonAPP = styled.button`
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
  cursor: pointer;
  margin: 40px auto 0 auto;
  ${(props) => {
    if (props.width) {
      return { width: props.width };
    }
  }}
  @media (max-width: 768px) {
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
    width: 100%;
  }
`;

export const TextBtn = styled.p`
  font-size: 14px;
  color: white;
  font-weight: bold;
  margin: 0 20px;
`;
