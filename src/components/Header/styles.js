import styled from 'styled-components';
import Logo from '../../images/logo.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Content = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 15% 20% 25% 25% 15%;
  grid-template-rows: 80px;
  grid-template-areas: 'LG LG LG LG LG';
  max-width: 1600px;
`;

export const LogoImg = styled.div`
  grid-area: LG;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 162px;
  height: 55px;
  background-image: url(${Logo});
  margin: 20px 10px;
  background-repeat: no-repeat;
  grid-column-start: 1;
  grid-column-end: 3;
`;
