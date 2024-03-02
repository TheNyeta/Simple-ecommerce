import { View, Text, Dimensions, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import LinearGradient from 'react-native-linear-gradient';
import { imageArray } from '../constants/constant';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({item, index, navigation}) => {
  return (
    <Pressable style={{ flex: 1 }} onPress={() => navigation.navigate('Categories', {item: item.title})}>
      <ImageBackground source={item.image} resizeMode='cover' className='flex-1' imageStyle={{ borderRadius: 12 }}>
        <LinearGradient className='flex-1 justify-end rounded-xl' colors={['transparent', '#00000099']}>
          <Text className='text-white font-semibold text-xl p-2 capitalize' >{item.title.replace('-', ' ')}</Text>
        </LinearGradient>
      </ImageBackground>
    </Pressable>
  )
}

const ImageCarousel = () => {

  const navigation = useNavigation()

  return (
    // <Carousel 
    //   data={imageArray}
    //   loop={true}
    //   lockScrollWhileSnapping={true}
    //   autoplay={true}
    //   autoplayInterval={6000}
    //   renderItem={({item, index}) => <CarouselItem item={item} index={index} navigation={navigation} />}
    //   sliderWidth={width}
    //   itemWidth={width * 0.8}
    //   // hasParallaxImages={true}
    //   // slideStyle={{display: 'flex', alignItems: 'center'}}

    // />
    <Carousel 
      data={imageArray}
      loop
      autoPlay={true}
      autoPlayInterval={5000}
      renderItem={({item, index}) => <CarouselItem item={item} index={index} navigation={navigation} />}
      width={width}
      height={height * 0.2}
      mode='parallax'
      modeConfig={{
        parallaxScrollingScale: 0.9,
        parallaxScrollingOffset: 50,
      }}
    />
  )
}

export default ImageCarousel