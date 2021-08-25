import React from 'react';

import {Container, LogoBaseDoc} from './styles';

import Logo from '../../assets/logo.png';

const Splash: React.FC = () => {
  return (
    <Container>
      <LogoBaseDoc source={Logo} />
    </Container>
  );
};

export default Splash;
