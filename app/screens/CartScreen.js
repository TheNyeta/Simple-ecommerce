import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import ProductCartList from '../components/ProductCartList';
import { cleanCart } from '../../redux/reducer/CartReducer';
import Animated, { FadeIn } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const CartScreen = ({navigation}) => {

  const cart = useSelector((state) => state.cart.cart)
  const totalPrice = cart.map((item) => item.price * item.quantity ).reduce((prev, curr) => prev + curr, 0)
  const dispatch = useDispatch()

  const handleCheckout = () => {
    navigation.navigate('Checkout')
    // dispatch(cleanCart())
  }

  return (
    <SafeAreaView className='flex-1 bg-white'>
      {/* <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}> */}
        <View className='flex-row items-center' style={{ height: height * 0.07 }}>
          <Pressable className='p-2' onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color='black' />
          </Pressable>
          <Text className='text-black text-2xl font-bold'>
              Cart
          </Text>
        </View>
        {cart.length == 0 ?
          <Animated.View className='flex-1 items-center mt-32' entering={FadeIn.delay(300)}>
            <Icon name='cart-off' size={100}/>
            <Text className='text-black text-2xl mt-6'>
              You have no item cart
            </Text>
          </Animated.View>
          :
          <ProductCartList />
        }
      {/* </ScrollView> */}
      <View className='w-full absolute bottom-0'>
        <LinearGradient colors={['transparent', '#00000030']} style={{ height: height * 0.01 }}/>
        <View className='p-2 flex-row items-center justify-between bg-white' style={{ height: height * 0.08 }}>
          <Text className='p-2 text-black text-xl text-wrap font-bold'>
            {'Total: ' + totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
          <Pressable className='justify-center items-center rounded-xl' style={{ width: width * 0.5, backgroundColor: cart.length == 0 ? 'gray' : 'green' }} disabled={cart.length == 0 ? true : false} onPress={() => handleCheckout()}>
            <Text className='p-2 text-white text-xl text-wrap font-bold'>
              Checkout
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen