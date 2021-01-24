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
  LoginText,
  Subcontainer,
  Line,
  LoginAlternativeText,
  FackbookLogContainer,
  FacebookButton,
  FacebookButtonText,
  FacebookLogo,
} from './styles'

const Login = () => {
  const logo = '~/assets/img/logo2.png'
  const faceLogo = '~/assets/img/facebookLogo.png'
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
     <Subcontainer>
       <Line /><LoginAlternativeText>Ou</LoginAlternativeText><Line />
     </Subcontainer>
     <FackbookLogContainer>
       <FacebookLogo source={{ faceLogo }} />
       <FacebookButton>
         <FacebookButtonText>Login com Facebook</FacebookButtonText>
       </FacebookButton>
     </FackbookLogContainer>
    </Container>
  );
};

export default Login;
