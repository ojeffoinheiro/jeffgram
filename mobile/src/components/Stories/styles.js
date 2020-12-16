import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`
export const ContainerHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const GroupLabel = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Label = styled.Text`
  font-size: 14px;
  padding: 5px;
`
export const ContainerScrollStory = styled.ScrollView.attrs({
  horizontal: true,
  showHorizontalScrollIndicator: false
})`

`
export const ContaineItemStory = styled.View`
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-right: 15px;
`
export const ContainePhotoStory = styled.View`
  background-color: #F89B3B;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 28px;
`
export const Photo = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  border-width: 2px;
  border-color: #fff;
`
export const UserName = styled.Text`
  height: 20px;
  font-size: 12px;
`
