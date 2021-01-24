import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/Feather';

import {
  Container,
  LogoContainer,
  LogoImage,
  LabelContainer,
  Input,
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

import logo from '../../assets/img/logo2.png';

const Login = () => {
  const navigation = useNavigation();
  const faceLogo =
    'https://i0.wp.com/wp.ufpel.edu.br/clc/files/2019/10/facebook-logo.png';

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  login = () => {
    navigation.navigate('MainTab');
  };
  signup = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={logo} />
      </LogoContainer>
      <LabelContainer>
        <Icon name="user" size={26} style={{marginRight: 20}} />
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Icon name="check-square" size={26} color="green" />
      </LabelContainer>
      <LabelContainer>
        <Icon name="lock" size={26} style={{marginRight: 20, marginTop: 5}} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Material name="droplet" size={26} color="gray" />
      </LabelContainer>
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
        <FacebookLogo source={{uri: faceLogo}} />
        <FacebookButton>
          <FacebookButtonText>Login com Facebook</FacebookButtonText>
        </FacebookButton>
      </FackbookLogContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <SignUpContainer>
        <SignUpText>Não tem uma conta? </SignUpText>
        <SignUpButton onPress={signup}>
          <SignUpButtonText> Crie uma</SignUpButtonText>
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
};

export default Login;
