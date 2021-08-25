import React from 'react';
import {
  Container,
  FormContainer,
  InputContainer,
  InputLogin,
  LogoBaseDoc,
  LogoContainer,
  Title,
  TitleContainer,
} from './styles';

import Logo from '../../assets/logo.png';

const Signin: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <LogoBaseDoc source={Logo} />
      </LogoContainer>
      <TitleContainer>
        <Title>Olá, seja bem vindo(a) ao app!</Title>
      </TitleContainer>
      <FormContainer>
        <InputContainer>
          <InputLogin placeholder="Login" />
        </InputContainer>
        <InputContainer>
          <InputLogin placeholder="Password" />
        </InputContainer>
      </FormContainer>
    </Container>
  );
};

export default Signin;
