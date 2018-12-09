/**
 *
 * ListItem Styled Components
 *
 */

import styled from 'styled-components';
import { tablet } from '../../styles/constants';

export const ListItemContainer = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Name = styled.p`
  width: 150px;
  margin: 5px 0;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};

  @media (min-width: ${tablet}) {
    width: 250px;
  }
`;

export const Price = styled.p`
  margin: 0 20px 0 0;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  max-width: 100px;
`;
