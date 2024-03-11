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
export const ContainerBar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px 0 0;
`;

export const ProgressBack = styled.div`
  width: 80%;
  height: 20px;
  border-radius: 10px;
  max-width: 400px;
  min-width: 200px;
  background-color: #252836;
`;

export const ProgressPoint = styled.div`
  width: 100%;
  height: 20px;
  border-radius: 10px;
  max-width: 30px;
  min-width: 50px;
  background-color: #9a3a88;
  position: relative;
  top: 0;
  animation: slide 2s linear infinite;

  @keyframes slide {
    0% {
      left: 10%;
    }
    50% {
      left: 85%;
    }
    100% {
      left: 10%;
    }
  }
`;
