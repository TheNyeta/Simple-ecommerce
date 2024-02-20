import { View, Text, Dimensions, Image, Pressable } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const OrderSummary = (props) => {


  const cart = useSelector((state) => state.cart.cart)
  const coupon = useSelector((state) => state.cart.coupon)
  const totalPrice = cart.map((item) => item.price * item.quantity ).reduce((prev, curr) => prev + curr, 0)
  const shippingPrice = 10

  return (
    <View>
      {cart.map((item, index) => {
        return (
          <Animated.View className='flex-row p-3 my-2 rounded-xl bg-white' style={{ elevation: 4, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62 }} entering={FadeInDown.delay(index * 100 + 200).springify()} key={index} >
            <Image className='rounded-xl' source={{uri: item.thumbnail}} style={{ width: width * 0.2, height: width * 0.2 }} />
            <View className='flex-1 ml-3 justify-between'>
              <View className='flex-1 justify-between'>
                <Text className='text-black text-lg text-wrap' numberOfLines={2} >
                  {item.title}
                </Text>
                <Text className='text-black text-lg text-wrap font-bold'>
                  {item.quantity + ' x ' + item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                </Text>
              </View>
            </View>
          </Animated.View>
        )
      })}
      <Pressable className='flex-row items-center justify-between p-3 rounded-lg bg-gray-100' onPress={() => props.handleOpen()}>
        <Text className='text-gray-500 text-md'>
          {Object.keys(coupon).length !== 0 ? coupon.title : 'Use a promo code'}
        </Text>
        <Icon name='chevron-right' size={30} color='black' />
      </Pressable>
      <View className='my-2'>
        <View className='flex-row items-center justify-between'>
          <Text className='text-gray-400 text-md'>
            Subtotal:
          </Text>
          <Text className='text-black text-md'>
            {totalPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
        </View>
        {Object.keys(coupon).length !== 0 &&
            <View className='flex-row items-center justify-between'>
              <Text className='text-gray-400 text-md'>
                Promo:
              </Text>
              <Text className='text-black text-md'>
                {'-' + (totalPrice * coupon.discount).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
              </Text>
            </View>
        }
        <View className='flex-row items-center justify-between'>
          <Text className='text-gray-400 text-md'>
            Shipping:
          </Text>
          <Text className='text-black text-md'>
            {shippingPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
        </View>
        <View className='flex-row items-center justify-between my-2'>
          <Text className='text-black text-xl font-bold'>
            Total:
          </Text>
          <Text className='text-black text-xl font-bold'>
            {(Object.keys(coupon).length !== 0 ? totalPrice + shippingPrice - (totalPrice * coupon.discount) : totalPrice + shippingPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default OrderSummary