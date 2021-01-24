import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  Container,
  LogoContainer,
  LogoImage,
  UsernameContainer,
  UsernameInput,
  PasswordContainer,
  PasswordText,
  ForgotPasswordContainer,
  ForgotPasswordText,
  LoginContainer,
  LoginText
} from './styles'

const Login = () => {
  const logo = '~/assets/img/logo2.png'
  return(
    <Container>
     <LogoContainer>
       <LogoImage source={{ uri: logo }} />
     </LogoContainer>
     <UsernameContainer>
       <UsernameInput placeholder="E-mail" />
     </UsernameContainer>
     <PasswordContainer>
       <PasswordText 
        placeholder="Senha"
        secureTextEntry={true} />
     </PasswordContainer>
     <ForgotPasswordContainer>
       <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
     </ForgotPasswordContainer>
     <LoginContainer onPress= {() => {}}>
       <LoginText>Entrar</LoginText>
     </LoginContainer>

    </Container>
  );
};

export default Login;
