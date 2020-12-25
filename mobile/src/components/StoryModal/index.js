import React from 'react'
import { Animated, Dimensions, Platform, StyleSheet } from 'react-native'

import stories from './stories.json'
import Story from '../Story'

import { 
    Container
} from './styles'

const { width } = Dimensions.get('window');
const perspective = width;
const angle = Math.atan(perspective / (width / 2));
const ratio = Platform.OS === 'ios' ? 2 : 1.2;

export default function StoryModal() {
    const axisX = new Animated.Value(0);

    function getStyle(index) {
        const offset = index * width;
        const inputRange = [offset - width, offset + width];
        const translateX = axisX.interpolate({
            inputRange,
            outputRange: [width / ratio, -width / ratio],
            extrapolate: 'clamp',
        });
        const rotateY = axisX.interpolate({
            inputRange,
            outputRange: [`${angle}rad`, `-${angle}rad`],
            extrapolate: 'clamp',
        });

        const translateX1 = axisX.interpolate({
            inputRange,
            outputRange: [(width / 2), -width / 2],
            extrapolate: 'clamp',
        });

        const extra = ((width / ratio) / Math.cos(angle / 2)) - width / ratio;
        const translateX2 = axisX.interpolate({
            inputRange,
            outputRange: [-extra, extra],
            extrapolate: 'clamp',
        });

        return {
            ...StyleSheet.absoluteFillObject,
            transform: [
                { perspective },
                { translateX },
                { rotateY },
                { translateX: translateX1 },
                { translateX: translateX2 },
            ],
        };
    }

    function getMaskStyle(index){
        const offset = index * width;
        const inputRange = [offset - width, offset, offset + width];
        const opacity = axisX.interpolate({
          inputRange,
          outputRange: [0.75, 0, 0.75],
          extrapolate: 'clamp',
        });
        return {
          backgroundColor: 'black',
          ...StyleSheet.absoluteFillObject,
          opacity,
        };
      }

    return(
        <Container>
            {stories.map((story, index) => (
                <Animated.View style={getStyle(index)} key={index}>
                    <Story story={story} />
                    <Animated.View style={getMaskStyle(index)} />
                </Animated.View>
            ))}

            <Animated.ScrollView 
                style={StyleSheet.absoluteFillObject}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16}
                snapToInterval={width}
                contentContainerStyle={{ width: width * stories.length }}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: { x: axisX },
                      },
                    },
                  ],
                  { useNativeDriver: true },
                )}
                decelerationRate={0.99}
                horizontal />
        </Container>
    );
}