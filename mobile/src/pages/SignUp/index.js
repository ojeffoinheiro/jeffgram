import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  LogoContainer,
  LogoImage,
  LabelContainer,
  Input,
  ButtonContainer,
  ButtonText,
  LineContainer,
  Line,
  SignUpContainer,
  SignUpText,
  SignUpButtonText,
  SignUpButton,
} from './styles';

import logo from '../../assets/img/logo2.png';

const Login = () => {
  const navigation = useNavigation();

  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [verification, setVerification] = useState();

  login = () => {
    navigation.navigate('Login');
  };
  signup = () => {
    navigation.navigate('MainTab');
  };

  return (
    <Container>
      <LogoContainer>
        <LogoImage source={logo} />
      </LogoContainer>
      <LabelContainer>
        <Icon name="user" size={26} style={{marginLeft: 10, marginTop: 5}} />
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={(name) => setName(name)}
        />
      </LabelContainer>
      <LabelContainer>
        <Icon name="at" size={26} style={{marginLeft: 10, marginTop: 5}} />
        <Input
          placeholder="Usuário"
          autoCapitalize="none"
          value={username}
          onChangeText={(username) => setUsername(username)}
        />
      </LabelContainer>
      <LabelContainer>
        <Material name="email" size={26} style={{marginLeft: 10, marginTop: 5}} />
        <Input
          placeholder="E-mail"
          autoCapitalize="none"
          keyboardType="email-address"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
      </LabelContainer>
      <LabelContainer>
      <Icon name="lock" size={26} style={{marginLeft: 10, marginTop: 5}} />
        <Input
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        <Material name="eye-off-outline" size={26} color="gray" />
      </LabelContainer>
      <LabelContainer>
      <Icon name="lock" size={26} style={{marginLeft: 10, marginTop: 5}} />
        <Input
          placeholder="Digite sua senha novamente"
          secureTextEntry={true}
          value={verification}
          onChangeText={(verification) => setVerification(verification)}
        />
      </LabelContainer>
      <ButtonContainer onPress={signup}>
        <ButtonText>Cadastrar</ButtonText>
      </ButtonContainer>
      <LineContainer>
        <Line />
      </LineContainer>
      <SignUpContainer>
        <SignUpText>Já tem uma conta? </SignUpText>
        <SignUpButton onPress={login}>
          <SignUpButtonText> Faça login</SignUpButtonText>
        </SignUpButton>
      </SignUpContainer>
    </Container>
  );
};

export default Login;
