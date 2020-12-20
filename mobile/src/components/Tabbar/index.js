import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, SubContainer } from './styles'

const Tabbar = () => {
  const [iconConfigure] = useState({
    color: '#333',
    size: 30
  })
  return(
    <Container>
      <SubContainer>
        <Icon name='home' {...iconConfigure} />
        <Icon name='search' {...iconConfigure} />
        <Icon name='instagram' {...iconConfigure} />
        <Icon name='heart' {...iconConfigure} />
        <Icon name='user' {...iconConfigure} />
      </SubContainer>
    </Container>
  )
};

export default Tabbar;
