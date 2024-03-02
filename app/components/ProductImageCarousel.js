import { View, Text, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-reanimated-carousel';

const { width, height } = Dimensions.get('window');

const CarouselItem = ({item, index}) => {
  // console.log(item)
  return (
    <View style={{ flex: 1 }} >
      <ImageBackground source={{uri: item}} resizeMode='cover' className='flex-1' >
      </ImageBackground>
    </View>
  )
}

const ProductImageCarousel = (props) => {

  const [index, setIndex] = useState(1)

  return (
    <View>
      {/* <Carousel 
        data={props.images}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onSnapToIndex={(index) => console.log('test')}
        // slideStyle={{display: 'flex', alignItems: 'center'}}
      /> */}
      <Carousel 
        data={props.images}
        loop={false}
        renderItem={CarouselItem}
        width={width}
        height={width}
        onSnapToItem={(index) => setIndex(index+1)}
        // slideStyle={{display: 'flex', alignItems: 'center'}}
      />
      <View className='m-2 px-2 absolute bottom-0 bg-white rounded-xl' style={{ elevation: 2 }}>
        <Text className='text-black text-lg'>
          {index + '/' + props.images.length}
        </Text>
      </View>
    </View>
  )
}

export default ProductImageCarousel