import styled from 'styled-components/native'

export const Container = styled.View`
  padding-bottom: 10px
`;
export const Coment = styled.View`
  flex-direction: row;
`;
export const UserPhoto = styled.Image.attrs({
    resizeMode: 'cover'
  })`
    width: 28px;
    height: 28px;
    border-radius: 28px;
    border-width: 1px;
    border-color: #fff
  `;
export const Username = styled.Text`
  font-weight: bold;
  font-size: 12px;
`;
export const Texto = styled.Text`
  font-size: 12px;
`;
export const SeeMore = styled.TouchableOpacity`
  font-size: 12px;
`;
export const SeeMoreText = styled.Text`
  font-size: 12px;
`;
export const Likes = styled.View``;