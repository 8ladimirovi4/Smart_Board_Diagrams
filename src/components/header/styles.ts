//@ts-nocheck
import styled from '@emotion/styled';
import { MTLogo, SELogo } from '/assets';
import { Dropdown } from 'primereact/dropdown';
import { LogoProps } from './types';

export const StyledMtLogoWrapper = styled.div<LogoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'cursor')};
`;

export const StyledMtLogo = styled.img`
  width: 70%;
`;

StyledMtLogo.defaultProps = { src: MTLogo };

export const StyledMtLogoTextWrapper = styled.div`
  display: flex;
  span:last-child {
    font-weight: normal;
  }
`;

export const StyledMtLogoText = styled.span`
  font-size: large;
  font-weight: bold;
  color: #00ac86;
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledUserWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledUser = styled(Dropdown)`
  &.p-dropdown {
    border: none;
  }
`;

export const StyledSeLogoWrapper = styled.div<LogoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  cursor: ${({ isPointer }) => (isPointer ? 'pointer' : 'cursor')};
`;

export const StyledSeLogo = styled.img`
  width: 100%;
`;

StyledSeLogo.defaultProps = { src: SELogo };
