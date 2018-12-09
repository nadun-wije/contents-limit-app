import styled from 'styled-components';
import { tablet } from '../../styles/constants';

export const Container = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (min-width: ${tablet}) {
    width: 500px;
    bottom: 10px;
  }
`;

export const InputFields = styled.div`
  > select {
    width: 100%;
    border: 1px solid black;
    border-radius: 5px;
    padding: 5px;
  }
`;

export const Input = styled.input`
  display: block;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Button = styled.button`
  margin-left: 50px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px 20px;
`;
