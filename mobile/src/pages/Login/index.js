import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

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
  LineContainer,
  Line,
  LoginAlternativeText,
  FackbookLogContainer,
  FacebookButton,
  FacebookButtonText,
  FacebookLogo,
  SignUpContainer,
  SignUpText,
  SignUpButtonText,
  SignUpButton,
} from './styles';

import  logo from '../../assets/img/logo2.png';

const Login = () => {
  const navigation = useNavigation();
  const faceLogo = 'https://i0.wp.com/wp.ufpel.edu.br/clc/files/2019/10/facebook-logo.png';

  const [email, setEmail] =  useState();
  const [password, setPassword] =  useState();

  login = () =>{
    navigation.navigate('MainTab');
  }

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={logo} />
      </LogoContainer>
      <UsernameContainer>
        <UsernameInput 
          placeholder="E-mail" 
          keyboardType='email-address'
          value={email}
          onChangeText={email => setEmail(email)} />
      </UsernameContainer>
      <PasswordContainer>
        <PasswordText 
          placeholder="Senha" 
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}/>
      </PasswordContainer>
      <ForgotPasswordContainer>
        <ForgotPasswordText>Esqueceu sua senha?</ForgotPasswordText>
      </ForgotPasswordContainer>
      <LoginContainer onPress={login}>
        <LoginText>Entrar</LoginText>
      </LoginContainer>
      <Subcontainer>
        <Line />
        <LoginAlternativeText>Ou</LoginAlternativeText>
        <Line />
      </Subcontainer>
      <FackbookLogContainer>
        <FacebookLogo source={{ uri: faceLogo }} />
        <FacebookButton>
          <FacebookButtonText>Login com Facebook</FacebookButtonText>
        </FacebookButton>
      </FackbookLogContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <SignUpContainer>
        <SignUpText>Não tem uma conta? </SignUpText>
        <SignUpButton>
          <SignUpButtonText> Crie uma</SignUpButtonText>
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
};

export default Login;
