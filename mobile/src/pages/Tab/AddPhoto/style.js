import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;
export const Header= styled.View`
    width: 100%
    margin-top: 15px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const HeaderTitle = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;
export const HeaderButtom = styled.TouchableOpacity``;
export const HeaderText = styled.Text`
    font-size: 15px;
    color: #F89B3B;
`;
export const BodyPost = styled.View` 
    flex-direction: row;
    justify-content: space-around;
    align-items: baseline;
`;
export const ImageContainer = styled.View`
    background-color: #EEE;
    margin-top: 10px;
    margin-left: 10px;
    border-radius: 5px;
`;
export const Image = styled.Image.attrs({
    resizeMode: 'cover'
})`
  width: 100px;
  height: 100px;
`
export const Input = styled.TextInput`
    margin-top: 20px;
    margin-left: 20px;
    width: 60%;
    border-color: black;
`;

export const Buttom = styled.TouchableOpacity`
    width: 90%;
    padding: 13px;
    border-radius: 10px;
    background-color: #F89B3B;
    align-items: center;
    margin-vertical: 7px;
`;
export const ButtomText = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: white;
`;

export const Modal = styled.Modal``;
export const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;
export const ModalBody = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 200px;
  padding: 10px 20px 0px 20px;
`;
export const Panel = styled.View`
    padding: 20px;
    background-color: #FFFFFF;
    padding-top: 20px;
`;
export const HeaderModal = styled.View`
    background-color: #FFFFFF;
    shadow-color: #333333;
    shadow-radius: 2px;
    shadow-opacity: 0.4;
    padding-top: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
export const PanelHeader = styled.View`
    align-items: center;
`;
export const SubPanel = styled.View`
    align-items: center;
`;

export const PanelHandle = styled.View`
    width: 40px;
    height: 8px;
    border-radius: 4px;
    background-color: #00000040;
    margin-bottom: 10px;
`;
export const PanelTitle = styled.Text`
    font-size: 27px;
    height: 35px;
`;
export const PanelSubtitle = styled.Text`
    font-size: 14px;
    color: gray;
    height: 30px;
    margin-bottom: 10px;
`;
export const PanelButton = styled.TouchableOpacity`
    padding: 13px;
    border-radius: 10px;
    background-color: #F89B3B;
    align-items: center;
    margin-vertical: 7px;
`;
export const PanelButtonTitle = styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: white;
`;