import DropdownComponent from 'components/dropdown/DropdownComponent';
import { useEffect, useState } from 'react';
import {
  StyledMtLogo,
  StyledMtLogoWrapper,
  StyledSeLogo,
  StyledInfoWrapper,
  StyledUserWrapper,
  StyledMtLogoText,
  StyledMtLogoTextWrapper,
  StyledSeLogoWrapper,
} from './styles';

import { NodeService } from './data';
import { UserAuthProps } from './types';

const HeaderComponent = () => {
  const [user, setUser] = useState<string>('Пользователь не авторизован');
  const [userOptions, setUserOptions] = useState<UserAuthProps[]>([]);

  useEffect(() => {
    NodeService.getUser().then((data: any) => setUserOptions(data));
  }, []);

  const handleDropdownChange = (value: string) => {
    switch (value) {
      case '1':
        setUser('Пользователь авторизован');
        setUserOptions([{ label: 'Выйти', value: '2' }]);
        break;

      case '2':
        setUser('Пользователь не авторизован');
        setUserOptions([{ label: 'Войти', value: '1' }]);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StyledMtLogoWrapper isPointer={false}>
        <StyledMtLogo />
        <StyledMtLogoTextWrapper>
          <StyledMtLogoText>Systeme</StyledMtLogoText>
          <StyledMtLogoText>Smart</StyledMtLogoText>
        </StyledMtLogoTextWrapper>
      </StyledMtLogoWrapper>
      <StyledInfoWrapper> {/*<h2>Информационная область</h2> */} </StyledInfoWrapper>
      {userOptions && userOptions.length ? (
        <StyledUserWrapper>
          <DropdownComponent
            onChange={(evt) => handleDropdownChange(evt.value)}
            options={userOptions}
            placeholder={user}
            className="w-full md:w-14rem"
            styles={{ border: 'none', width: '310px' }}
          />
        </StyledUserWrapper>
      ) : (
        <></>
      )}
      <StyledSeLogoWrapper isPointer={false}>
        <StyledSeLogo />
      </StyledSeLogoWrapper>
    </>
  );
};

export default HeaderComponent;
