import styled from 'styled-components/native'

export const Modal = styled.Modal``;
export const ModalArea = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;
export const ModalBody = styled.View`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  min-height: 350px;
  padding: 10px 20px 40px 20px;
`;
export const Container = styled.View`
    flex: 1;
`;
export const Panel = styled.View`
    padding: 20px;
    background-color: #FFFFFF;
    padding-top: 20px;
`;
export const Header = styled.View`
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