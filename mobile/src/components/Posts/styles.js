import styled from 'styled-components/native'

export const Scroll = styled.ScrollView.attrs({
  vertical: true,
  showVerticalScrollIndicator: false
})`
  padding-bottom: 10px
`;
export const Container = styled.View`
  padding-bottom: 10px
`;
export const ContainerHeader = styled.View`
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const StoryItem = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ContainerPhoto = styled.TouchableOpacity`
  background-color: #F89B3B;
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
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

export const PhotoPost = styled.Image.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`
export const Subcontainer = styled.View`
  padding: 0px 10px;
`;

export const UsernameStory = styled.Text`
  margin-left: 2px;
`;
export const UsernamePost = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;
export const UsernameLiked = styled.Text`
  font-size: 15px;
`;

export const Account = styled.View`
  flex-direction: column;
  justify-content: flex-start;
  align-items: baseline;
`;

export const AccountText = styled.Text``;

export const Likes = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ContainerActions = styled.View`
  margin-top: 5px;
`;

export const Button = styled.TouchableOpacity``

export const ContainerActionsIcons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const GroupIcons = styled.View`
  flex-direction: row;
`;