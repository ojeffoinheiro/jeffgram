import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
`;
export const AddStory = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border-width: 1px;
  border-color: #f89b3b;
`;

export const ContainerScrollStory = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false,
})``;
export const ContaineItemStory = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const ContainePhotoStory = styled.View`
  background-color: #f89b3b;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
`;
export const Photo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border-width: 2px;
  border-color: #fff;
`;
export const UserName = styled.Text`
  height: 20px;
  font-size: 12px;
`;
