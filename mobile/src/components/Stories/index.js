import React from 'react'

import {
  Container,
  ContainerHeader,
  GroupLabel,
  Label,
  ContainerScrollStory,
  ContaineItemStory,
  ContainePhotoStory,
  Photo,
  UserName
} from './styles'
import Icon from 'react-native-vector-icons/FontAwesome5'

import photo1 from '~/assets/img/photo2.jpg'
import photo2 from '~/assets/img/photo2.jpg'
import photo3 from '~/assets/img/photo3.jpg'
import photo4 from '~/assets/img/photo4.jpg'
import photo5 from '~/assets/img/photo5.jpg'
import photo6 from '~/assets/img/photo6.png'
import photo7 from '~/assets/img/photo7.jpg'
import photo8 from '~/assets/img/photo8.jpg'
import photo9 from '~/assets/img/photo9.jpg'

const Stories = () => {
  return(
    <Container>
      <ContainerHeader>
        <Label>Stories</Label>
        <GroupLabel>
          <Icon name='caret-right' size={20}/>
          <Label>Watch all</Label>
        </GroupLabel>
      </ContainerHeader>
      <ContainerScrollStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo1} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
        <ContaineItemStory>
          <ContainePhotoStory>
            <Photo source={photo3} />
          </ContainePhotoStory>
          <UserName>Jeferson</UserName>
        </ContaineItemStory>
      </ContainerScrollStory>
    </Container>
  )
};

export default Stories;
