import React from 'react'

import {
  Container,
  Username,  
  Coment,
  Texto,
  SeeMore,
  SeeMoreText,
} from './styles'
import comments from './comments.json'
import AddComment from './AddComment'

const Posts = () => {

  return(
    <Container>
        {comments && comments.map((comment, index) => (
            <Coment key={index}>
                <Username>{comment.username}: </Username>
                <Texto>{comment.text}</Texto>
            </Coment>
        ))}
        <SeeMore>
          <SeeMoreText>ver todos x comentários </SeeMoreText>
        </SeeMore>
        <AddComment />
    </Container>
  )
};

export default Posts;
