import styled from 'styled-components';
import logoFooter from '../../images/logoFooter.svg';
import insta from '../../images/insta.svg';
import linkedin from '../../images/linkedin.svg';
import twitter from '../../images/twitter.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #161924;
`;

export const Content = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 1600px;
  margin-top: 40px;
  grid-template-columns: 20% 60% 20%;
  grid-auto-rows: auto;
  grid-row-gap: 10px;

  grid-template-areas:
    'LG LG LG LG LG '
    'SS SS SS SS SS';
  @media (max-width: 768px) {
    grid-template-areas:
      'SS SS SS'
      'SS SS SS'
      'LG LG LG'
      'LG LG LG';
    grid-row-gap: 40px;
  }
`;

export const Logo = styled.div`
  grid-area: 'LG';
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  @media (max-width: 768px) {
    grid-row-start: 2;
    grid-row-end: 3;
  }
`;

export const LogoImg = styled.div`
  background-image: url(${logoFooter});
  background-size: contain;
  width: 121px;
  height: 140px;
  background-repeat: no-repeat;
  /* margin: 20px auto; */
`;
export const Social = styled.div`
  grid-area: 'SC';
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px 0;
  @media (max-width: 768px) {
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;
export const Title = styled.p`
  font-size: 20px;
  margin: 24px 24px;
  color: #fbfbfb;
  font-weight: bold;
  /* @media (max-width: 768px) {
    margin: 10px auto;
  } */
`;
export const Icons = styled.div`
  display: flex;
  /* align-items: space-around; */
`;
export const Insta = styled.div`
  background-image: url(${insta});
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  margin: 8px 10px;
`;
export const Linkedin = styled.div`
  background-image: url(${linkedin});
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  margin: 8px 10px;
`;
export const Twitter = styled.div`
  background-image: url(${twitter});
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  margin: 8px 10px;
`;
