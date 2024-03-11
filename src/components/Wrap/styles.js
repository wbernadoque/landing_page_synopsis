import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  /* position: relative; */
  width: 100%;
  grid-template-columns: auto 800px auto;
  grid-auto-rows: auto;
  grid-template-areas:
    'T1 T1 T1'
    'S1 S1 S1'
    'S2 S2 S2'
    'B1 B1 B1'
    'I1 I1 I1'
    'T2 T2 T2'
    'S3 S3 S3'
    'I2 I2 I2'
    'T3 T3 T3'
    'I3 I3 I3'
    'T4 T4 T4'
    'S4 S4 S4'
    'I4 I4 I4'
    'B2 B2 B2'
    'F1 F1 F1'
    'F2 F2 F2'
    'BT BT BT';

  @media (max-width: 768px) {
    grid-template-columns: 5% 13% 13% 13% 13% 13% 13% 13% 5%;
    grid-template-areas:
      'T1 T1 T1 T1 T1 T1 T1 T1 T1'
      'S1 S1 S1 S1 S1 S1 S1 S1 S1'
      'S2 S2 S2 S2 S2 S2 S2 S2 S2'
      'B1 B1 B1 B1 B1 B1 B1 B1 B1'
      'T2 T2 T2 T2 T2 T2 T2 T2 T2'
      'T2 T2 T2 T2 T2 I1 I1 I1 I1'
      'S3 S3 S3 S3 S3 I1 I1 I1 I1'
      'I2 I2 I2 I2 I2 I2 I2 I2 I2'
      'T3 T3 T3 T3 T3 T3 T3 T3 T3'
      'I3 I3 I3 I3 I3 I3 I3 I3 I3'
      'T4 T4 T4 T4 T4 T4 T4 T4 T4'
      'S4 S4 S4 S4 S4 S4 S4 S4 S4'
      'I4 I4 I4 I4 I4 I4 I4 I4 I4'
      'B2 B2 B2 B2 B2 B2 B2 B2 B2'
      'F1 F1 F1 F1 F1 F1 F1 F1 F1'
      'F2 F2 F2 F2 F2 F2 F2 F2 F2'
      'BT BT BT BT BT BT BT BT BT';
  }
`;
