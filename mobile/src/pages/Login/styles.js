import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #000;
`;

export const LogoContainer = styled.View`
  align-items: center;
  background-color: red;
`;
export const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 300px;
  height: 50px;
`;

export const UsernameContainer = styled.View`
  border-color: #ececec;
  background-color: #fafafa;
  border-width: 1px;
  border-radius: 5px;
  height: 40px;
  justify-content: center;
  margin-start: 20px;
  margin-end: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`;
export const UsernameInput = styled.TextInput`
  margin-start: 20px;
`;

export const PasswordContainer = styled.View`
  border-color: #ececec;
  border-width: 1px;
  border-radius: 5px;
  height: 40px;
  justify-content: center;
  margin-start: 20px;
  margin-end: 20px;
  background-color: #fafafa;
  margin-bottom: 20px;
`;
export const PasswordText = styled.TextInput`
  margin-start: 20px;
`;

export const ForgotPasswordContainer = styled.TouchableOpacity`
  align-items: flex-end;
  margin-end: 20px;
`;
export const ForgotButton = styled.TouchableOpacity``;
export const ForgotPasswordText = styled.Text`
  color: #0088f8;
`;

export const LoginContainer = styled.TouchableOpacity`
  align-items: center;
  height: 40px;
  margin-top: 30px;
  background-color: #0088f8;
  justify-content: center;
  margin-start: 20px;
  margin-end: 20px;
  border-radius: 5px;
`;
export const LoginText = styled.Text`
  color: #fff;
`;

export const Subcontainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
export const Line = styled.View`
  flex: 1;
  height: 1px;
  background-color: #262626;
`;
export const LoginAlternativeText = styled.Text`
margin-left: 40px;
margin-right: 40px;
color: #969696;
`;

export const FackbookLogContainer = styled.View`
margin-top: 40px;
flex-direction: row;
align-items: center;
justify-content: center;
`;
export const FacebookLogo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 20px;
  height: 20px;
`;
export const FacebookButton = styled.TouchableOpacity`
align-items: center; 
margin-start: 10px;
`;
export const FacebookButtonText = styled.Text`
color: #008bef;
`;