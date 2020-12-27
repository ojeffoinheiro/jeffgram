import React, { useState } from 'react'
import { Alert, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

import {
  Container,
  CommentArea,
  Input,
  SubContainer,
  Caption
} from './styles'

const AddComment = () => {
    const [comment, setComment] = useState('');
    const [editMode, setEditMode] = useState(false);

    handleAddComment = () =>{}

    return(
        <Container>
            {editMode ? (
                <CommentArea>
                    <Input placeholder='Enviar um comentário...' 
                        style={{ 
                            width: Dimensions.get('screen').width * 0.9,
                        }}
                        autoFocus={true}
                        value= {comment}
                        onChangeText={comment => setComment(comment)}
                        onSubmitEditing={handleAddComment()}
                    />
                    <TouchableWithoutFeedback onPress={() => setEditMode(false) }>
                        <Icon name='times' size={15} color='#555' />
                    </TouchableWithoutFeedback>
                </CommentArea>
            ) : (
                <TouchableWithoutFeedback onPress={() => setEditMode(true) } >
                    <Caption style={{ width: Dimensions.get('screen').width * 0.7 }} >Adicione um comentário...</Caption>
                </TouchableWithoutFeedback>
            )}
        </Container>
  )
};

export default AddComment;
