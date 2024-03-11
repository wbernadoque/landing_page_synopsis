import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  height: 100vh;
  flex-direction: column;
  background-color: var(--blackbg);
  color: #fbfbfb;
  max-width: 1600px;
  padding: 0 32px;
`;

export const Content = styled.div`
  background-color: var(--blackbg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Title = styled.h2`
  font-size: 40px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const HeadContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* height: 400px; */
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const TextInfo = styled.p`
  font-size: 16px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: start;
  }
`;

export const BackToHome = styled(Link)`
  font-size: 14px;
  color: var(--primary);
  text-decoration: none;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
export const FormContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  /* height: 400px; */
`;

export const ContentToReverse = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
