import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #000;
`;

export const LogoContainer = styled.View`
  margin-top: 20px;
  align-items: center;
`;
export const LogoImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 300px;
  height: 50px;
`;

export const LabelContainer = styled.View`
  flex-direction: row;
  border-color: #ececec;
  background-color: #fafafa;
  border-width: 1px;
  border-radius: 5px;
  height: 40px;
  justify-content: flex-start;
  margin: 10px;
`;
export const Input = styled.TextInput`
  margin-start: 5px;
`;

export const ButtonContainer = styled.TouchableOpacity`
  align-items: center;
  height: 40px;
  margin-top: 30px;
  background-color: #F89B3B;
  justify-content: center;
  margin-start: 20px;
  margin-end: 20px;
  border-radius: 5px;
`;
export const ButtonText = styled.Text`
  color: #fff;
`;

export const Line = styled.View`
  flex: 1;
  background-color: #262626;
  height: 1px;
`;

export const SignUpContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;
export const SignUpText = styled.Text`
  color: #969696;
`;
export const SignUpButton = styled.TouchableOpacity``;
export const SignUpButtonText = styled.Text`
  color: #F89B3B;
`;
export const LineContainer = styled.View`
flex-direction: row;
margin-top: 50px;
`;