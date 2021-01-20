import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 5px;
  margin-vertical: 10px;
`;
export const ContainerTags = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false,
})`
  margin-top: 10px;
`;
export const TagButton = styled.TouchableOpacity`
  height: 30px;
  border-width: 1.5px;
  border-radius: 8px;
  justify-content: center;
  margin-bottom: 10px;
  background-color: #000;
  margin-horizontal: 5px;
`;
export const TagText = styled.Text`
  color: white;
  margin-horizontal: 15px;
  font-weight: bold;
`;
export const SearchContainer = styled.View`
flex-direction: row;
align-items: center;
background-color: #ccc;
height: 35px;
font-weight: bold;
border-radius: 10px;
padding: 5px 10px 0px 20px;`
export const Input = styled.TextInput`
flex: 1;
height: 35px;
`;
export const PostsScroll = styled.ScrollView``;
export const PostItem = styled.TouchableOpacity``;
export const Image = styled.Image.attrs({
    resizeMode: 'cover'
})`
    height: 150px;
    width: 150px;
    flex: 1;
    marginEnd: 2px;
    marginBottom: 2px;
    alignItems: center
`;
