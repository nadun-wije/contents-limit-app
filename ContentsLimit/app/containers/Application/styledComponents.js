import styled from 'styled-components';

export const AppContainer = styled.div`
  border: 1px solid black;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  /* padding: 0 16px; */
  flex-direction: column;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;

export const TotalText = styled.p`
  padding-top: 20px;
  padding-left: 40px;
`;
