import { View, Text, Dimensions, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Carousel from 'react-native-snap-carousel'

const { width, height } = Dimensions.get('window');

const CarouselItem = ({item, index}) => {
  // console.log(item)
  return (
    <View style={{ width: width, height: width}} >
      <ImageBackground source={{uri: item}} resizeMode='cover' className='flex-1' >
      </ImageBackground>
    </View>
  )
}

const ProductImageCarousel = (props) => {

  const [index, setIndex] = useState(0)

  return (
    <View>

      <Carousel 
        data={props.images}
        renderItem={CarouselItem}
        sliderWidth={width}
        itemWidth={width}
        inactiveSlideScale={1}
        inactiveSlideOpacity={1}
        onSnapToIndex={(index) => console.log('test')}
        // slideStyle={{display: 'flex', alignItems: 'center'}}
      />
      {/* <View className='m-2 absolute bottom-0 bg-white rounded-xl'>
        <Text className='text-lg'>
          {index}
        </Text>
      </View> */}
    </View>
  )
}

export default ProductImageCarousel