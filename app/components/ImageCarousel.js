import { View, Text, Dimensions, ImageBackground } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'
import LinearGradient from 'react-native-linear-gradient';
import { imageArray } from '../constants/constant';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({item, index}, parallaxProps) => {
  return (
    <View style={{ width: width * 0.8 , height: width * 0.4 }} >
      {/* <ParallaxImage
        source={item}
        containerStyle={{borderRadius: 20}}
        style={{resizeMode: 'contain'}}
        parallaxFactor={0.4}
        {...parallaxProps}
      /> */}
      <ImageBackground source={item} resizeMode='cover' className='flex-1' imageStyle={{ borderRadius: 12 }}>
        <LinearGradient className='flex-1 justify-end rounded-xl' colors={['transparent', '#00000099']}>
          <Text className='text-white font-semibold text-xl p-2' >Home Decoration</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

const ImageCarousel = () => {
  return (
    <Carousel 
      data={imageArray}
      loop={true}
      lockScrollWhileSnapping={true}
      autoplay={true}
      autoplayInterval={6000}
      renderItem={CarouselItem}
      sliderWidth={width}
      itemWidth={width * 0.8}
      // hasParallaxImages={true}
      slideStyle={{display: 'flex', alignItems: 'center'}}

    />
  )
}

export default ImageCarousel