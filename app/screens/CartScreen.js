import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import ProductCartList from '../components/ProductCartList';
import { cleanCart } from '../../redux/reducer/CartReducer';

const { width, height } = Dimensions.get('window');

const CartScreen = ({navigation}) => {

  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)
  const totalPrice = cart.map((item) => item.price * item.quantity ).reduce((prev, curr) => prev + curr, 0)
  const dispatch = useDispatch()

  const handleCheckout = () => {
    dispatch(cleanCart())
  }

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}>
        <View className='flex-row items-center'>
          <Pressable className='m-3' onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color='black' />
          </Pressable>
          <Text className='text-black text-2xl font-bold'>
              Cart
          </Text>
        </View>
        {cart.length == 0 ?
          <View className='flex-1 items-center mt-32'>
            <Icon name='cart-off' size={100}/>
            <Text className='text-black text-2xl mt-6'>
              You have no item cart
            </Text>
          </View>
          :
          <ProductCartList />
        }
      </ScrollView>
      <View className='w-full absolute bottom-0'>
        <LinearGradient colors={['transparent', '#00000030']} style={{ height: height * 0.01 }}/>
        <View className='p-2 flex-row items-center justify-between bg-white' style={{ height: height * 0.08 }}>
          <Text className='p-2 text-black text-xl text-wrap font-bold'>
            {'Total: ' + totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
          <Pressable className='justify-center items-center rounded-xl bg-gray-300' style={{ width: width * 0.5 }} onPress={() => handleCheckout()}>
            <Text className='p-2 text-black text-xl text-wrap font-bold'>
              Checkout
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CartScreen