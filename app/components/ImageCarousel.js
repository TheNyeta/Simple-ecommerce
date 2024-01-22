import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel'

const { width, height } = Dimensions.get('window');

const imageArray = [
  require('../assets/images/clothes.jpg'),
  require('../assets/images/furniture.jpg'),
  require('../assets/images/homedecoration.jpg'),
  require('../assets/images/smartphone.jpg')
]

const ItemCarousel = ({item, index}, parallaxProps) => {
  return (
    <View style={{width: width * 0.8, height: width * 0.4}} >
      <ParallaxImage
        source={item}
        containerStyle={{borderRadius: 20}}
        style={{resizeMode: 'cover'}}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
    </View>
  )
}

const ImageCarousel = () => {
  return (
    <Carousel 
      data={imageArray}
      loop={true}
      autoplay={true}
      autoplayInterval={4000}
      renderItem={ItemCarousel}
      sliderWidth={width}
      itemWidth={width * 0.8}
      firstItem={1}
      hasParallaxImages={true}
      slideStyle={{display: 'flex', alignItems: 'center'}}

    />
  )
}

export default ImageCarousel