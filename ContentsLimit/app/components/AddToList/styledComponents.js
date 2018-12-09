import styled from 'styled-components';
import { tablet, colors } from '../../styles/constants';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${colors.lightGrey};
  height: 180px;

  @media (min-width: ${tablet}) {
    width: 500px;
    bottom: 10px;
  }
`;

export const Select = styled.select`
  width: 100%;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
`;

export const Input = styled.input`
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
  width: 100%;
  background-color: white;
`;

export const Button = styled.button`
  margin-left: 50px;
  border: 3px solid ${colors.green};
  border-radius: 5px;
  padding: 10px 20px;
  font-weight: bold;
  background-color: ${colors.green};
  color: white;

  :hover:enabled {
    background-color: white;
    color: ${colors.green};
  }

  :disabled {
    border-color: grey;
    background-color: grey;
  }
`;
