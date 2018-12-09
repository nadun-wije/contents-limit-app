import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px;
  position: fixed;
  bottom: 0;
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
