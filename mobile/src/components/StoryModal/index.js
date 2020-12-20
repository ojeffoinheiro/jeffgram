import React from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import Animated from 'react-native-reanimated'

import stories from './stories.json'
import Story from '../Story'

import { 
    Container
} from './styles'

const { width } = Dimensions.get('window');
const {concat} = Animated;

export default function StoryModal() {
    const axisX = new Animated.Value(0);
    const perspective = 50;
    const angle = Math.atan(perspective / (width / 2 ));

    function onGeneralStyle(index) {
        const offSet = width * index;
        const inputRange = [offSet - width, offSet + width ];
        const translateX = axisX.interpolate({
            inputRange,
            outputRange: [width / 2, -width / 2 ],
            extrapolate: 'clamp'
        });
        const rotateY = axisX.interpolate({
            inputRange,
            outputRange: [angle, -angle],
            outputRange: [concat(angle, "rad"), concat("-",angle,"rad")],
            extrapolate: 'clamp'
        });

        return {
            ...StyleSheet.absoluteFillObject,
            transform: [
                {perspective},
                {translateX},
                {rotateY},
                {translateX}
            ]
        }
    }

    return(
        <Container>
            {stories.map((story, index) => (
                <Story key={index} story={story} style={onGeneralStyle(index)} />
            ))}

            <Animated.ScrollView 
                horizontal
                bounces={false}
                snapToInterval={width}
                contentContainerStyle={{
                    width: width * stories.length
                }}
                onScroll={Animated.event([{
                    nativeEvent: {
                        contentOffset: {
                            x: axisX,
                        },
                    }
                }])} />
        </Container>
    );
}