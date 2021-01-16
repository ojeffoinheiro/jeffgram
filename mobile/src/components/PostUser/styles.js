import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const PostItem = styled.TouchableOpacity``;
export const Image = styled.Image.attrs({
    resizeMode: 'cover'
})`
    height: 150px;
    flex: 1;
    marginEnd: 2px;
    marginBottom: 2px;
    alignItems: center
`;
