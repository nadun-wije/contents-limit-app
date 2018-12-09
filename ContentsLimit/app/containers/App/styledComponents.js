import styled from 'styled-components';
import { tablet } from '../../styles/constants';

export const AppContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  min-height: 100%;
  font-size: 16px;
  line-height: 20px;

  button {
    cursor: pointer;
  }
`;

export const TotalText = styled.p`
  padding-top: 20px;
  padding-left: 40px;
`;

export const ListContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

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
