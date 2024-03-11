import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
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
