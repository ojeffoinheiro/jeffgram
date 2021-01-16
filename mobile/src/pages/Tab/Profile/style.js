import styled from 'styled-components/native';

export const Header = styled.View`
    width: 100%
    margin-top: 15px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const AddPhoto = styled.TouchableOpacity``;
export const Username = styled.Text``;
export const Menu = styled.TouchableOpacity``;

export const Container = styled.ScrollView``;
export const StoryItem = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
export const ContainerPhotoUser = styled.TouchableOpacity`
  background-color: #f89b3b;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
`;
export const UserPhoto = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  border-width: 1px;
  border-color: #fff;
`;
export const SubHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  margin-left: 10px;
`;
export const ContainerInfo = styled.View`
  flex: 1;
  flex-direction: row;
  align-self: center;
  margin-end: 20px;
`;
export const InfoItem = styled.TouchableOpacity`
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
`;
export const InfoText = styled.Text`
  align-self: center;
`;
export const NumberText = styled.Text`
  font-weight: bold;
  align-self: center;
  font-size: 15px;
`;

export const UserBio = styled.View`
  flex: 1;
  flex-direction: column;
  margin-start: 10px;
  margin-top: 20px;
`;
export const UsernameBio = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const AccountBio = styled.Text`
  margin-bottom: 5px;
`;
export const EditInfoButton = styled.TouchableOpacity`
  margin-top: 10px;
  flex: 1;
  height: 30px;
  border-radius: 5px;
  margin-start: 10px;
  margin-end: 10px;
  justify-content: center;
  border-color: #dbdbdb;
  border-width: 1px;
  align-items: center;
`;
export const EditInfoButtonText = styled.Text``;

export const StoryContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-start: 10px;
  margin-end: 10px;
  margin-top: 10px
  margin-bottom: 5px
  align-items: center
`;