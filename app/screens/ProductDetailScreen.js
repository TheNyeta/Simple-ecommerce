import { View, Text, ScrollView, Dimensions, StatusBar, Pressable } from 'react-native'
import React, { useState } from 'react'
import ProductImageCarousel from '../components/ProductImageCarousel'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import ProductList from '../components/ProductList';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/reducer/CartReducer';

const { width, height } = Dimensions.get('window');

const ProductDetailScreen = (props) => {

  const navigation = props.navigation
  const item = props.route.params.item
  const images = [item.thumbnail].concat(item.images)
  const [liked, setLiked] = useState(false)
  const dispatch = useDispatch()

  const handleLike = () => {
    setLiked(!liked)
  }

  const addItemToCart = (item) => {
    dispatch(addToCart(item))
  }
  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)

  return (
    <View className='flex-1'>
      {/* <StatusBar backgroundColor={'transparent'} translucent={true} /> */}
      <ScrollView className='flex-1 bg-gray' showsVerticalScrollIndicator={false}>
        <ProductImageCarousel images={images} />
        <View className='w-full flex-row justify-between p-2 bg-white'>
          <View>
            <Text className='text-black text-lg text-wrap'>
              {item.title}
            </Text>
            <View className='flex-row items-center'>
              <Icon name='star' size={24} color='gold' />
              <Text className='text-black text-lg'>
              {item.rating}
              </Text>
            </View>
            <Text className='text-black text-xl text-wrap font-bold'>
              {'$' + item.price}
            </Text>
          </View>
          <Pressable className='m-2 bg-white rounded-full' onPress={() => handleLike()}>
            {liked ?
              <Animated.View entering={FadeIn} key={liked}>
                <Icon name='heart' size={30} color='red' />
              </Animated.View>
            :
              <Animated.View entering={FadeIn} key={liked}>
                <Icon name='heart-outline' size={30} color='black' />
              </Animated.View>
            }
          </Pressable>
        </View>
        <View className='w-full p-2 mt-2 bg-white'>
          <Text className='text-black text-xl font-bold'>
            Description
          </Text>
          <Text className='text-black text-lg text-wrap'>
            {item.description}
          </Text>
          <View className='flex-row py-2 items-center border-b-2 border-gray-200 justify-between'>
            <Text className='text-black text-lg'>
              Brand:
            </Text>
            <Text className='text-black text-lg'>
            {item.brand}
            </Text>
          </View>
          <View className='flex-row py-2 items-center border-b-2 border-gray-200 justify-between'>
            <Text className='text-black text-lg'>
              Category:
            </Text>
            <Text className='text-black text-lg capitalize'>
            {item.category}
            </Text>
          </View>
        </View>
        <View className='w-full py-2 pb-20 mt-2 bg-white'>
          <Text className='mx-3 text-black text-2xl font-bold' >
            Recomended for you
          </Text>
          <ProductList />
        </View>
      </ScrollView>
      <SafeAreaView className='absolute'>
        <Pressable className='m-2 bg-white rounded-full' onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color='black' />
        </Pressable>
      </SafeAreaView>
      <View className='w-full p-2 flex-row items-center justify-end absolute bottom-0 bg-white' style={{ height: height * 0.08 }}>
        <Pressable className='justify-center items-center rounded-xl bg-gray-300' style={{ width: width * 0.5 }} onPress={() => addItemToCart(item)}>
          <Text className='p-2 text-black text-2xl text-wrap font-bold'>
            Add to cart
          </Text>
        </Pressable>
      </View>
    </View>
  )
}

export default ProductDetailScreen