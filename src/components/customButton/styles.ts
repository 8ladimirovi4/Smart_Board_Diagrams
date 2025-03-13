import styled from '@emotion/styled';
import { Button } from 'primereact/button';
import { colors } from 'styles/colors';

export const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  padding: 5px;
  background-color: ${colors.technoGreen};
  border-color: ${colors.technoGreen};
  color: white;
`;
