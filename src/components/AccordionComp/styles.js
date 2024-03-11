import styled from 'styled-components';
import more from '../../images/more.svg';
import minus from '../../images/minus.svg';

const getWidth = () => {
  var getLarg = window.screen.width;
  let larg = `${getLarg - 80}px`;
  return larg;
};

export const Container = styled.div`
  grid-area: ${(props) => props.area};
  width: 100%;
  grid-column-start: 2;
  grid-column-end: 3;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 768px) {
    grid-column-start: ${(props) => (props.colS ? props.colS : 2)};
    grid-column-end: ${(props) => (props.colE ? props.colE : 9)};
    grid-row-start: ${(props) => (props.rowS ? props.rowS : 'auto')};
    grid-row-end: ${(props) => (props.rowE ? props.rowE : 'auto')};
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: white;
  line-height: 30px;
  text-align: start;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0 6px;
  }
`;

export const Title = styled.h3`
  margin: 0 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  margin: 30px 0;
  background-color: #808191;
`;

export const TitleWrap = styled.div`
  display: flex;
  width: 900px;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
  @media (max-width: 900px) {
    display: flex;
    width: ${getWidth};
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

export const IconWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
`;

export const Icon = styled.div`
  background-image: ${(props) =>
    !!props.open ? `url(${minus})` : `url(${more})`};
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  transition: background-image 0.2s ease;
  background-position: center;
`;
