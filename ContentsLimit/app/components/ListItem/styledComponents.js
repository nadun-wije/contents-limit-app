import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Name = styled.p`
  width: 150px;
  margin: 5px 0;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
`;

export const Price = styled.p`
  margin: 0 20px 0 0;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
`;
