/*
 *
 * App Styled Components
 *
 */

import styled from 'styled-components';
import { tablet, colors } from '../../styles/constants';

export const AppContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Noto+Sans');

  max-width: 500px;
  margin: 0 auto;
  min-height: 100%;
  font-size: 16px;
  font-family: 'Noto Sans', sans-serif;
  color: ${colors.darkGrey};
  line-height: 20px;

  button {
    cursor: pointer;
    font-family: 'Noto Sans', sans-serif;
  }

  input,
  select {
    font-family: 'Noto Sans', sans-serif;
  }
`;

export const TotalText = styled.p`
  padding-top: 20px;
  padding-left: 40px;
  font-weight: bold;

  color: ${colors.green};
`;

export const ListContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  height: calc(100vh - 180px);

  /* Hide the scrollbar */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  @media (min-width: ${tablet}) {
    margin-top: 20px;
    width: 500px;
  }
`;
