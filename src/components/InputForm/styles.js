import styled from 'styled-components';
import backtop from '../../images/backtop.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 900px;
  margin: 16px 0;
  @media (max-width: 768px) {
  }
`;
export const TextLabel = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: var(--mediumgrey);
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const InputTxt = styled.input`
  width: 100%;
  height: 48px;
  background-color: var(--mediumbg);
  border-radius: 64px;
  color: var(--mediumgrey);
  padding-left: 25px;
  box-sizing: border-box;
  border: none;
  ::placeholder {
    color: var(--mediumgrey);
    /* padding-left: 25px; */
  }
`;

export const InputArea = styled.textarea`
  width: 100%;
  height: 100px;
  background-color: var(--mediumbg);
  color: var(--mediumgrey);
  border-radius: 16px;
  padding: 20px;
  box-sizing: border-box;

  border: none;
  ::placeholder {
    font-family: 'Inter', sans-serif;
    color: var(--mediumgrey);
    /* padding: 20px 0; */
  }
`;
