import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderSummary from '../components/OrderSummary';

const { width, height } = Dimensions.get('window');

const CheckoutScreen = ({navigation}) => {

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row items-center' style={{ height: height * 0.07 }}>
        <Pressable className='p-2' onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color='black' />
        </Pressable>
        <Text className='text-black text-2xl font-bold'>
          Checkout
        </Text>
      </View>
      <ScrollView>
        <View className='mx-3'>
          <Text className='text-black text-xl font-bold'>
            Delivery Address
          </Text>
        </View>
        <View className='m-3'>
          <Text className='text-black text-xl font-bold'>
            Order Summary
          </Text>
          <OrderSummary />
        </View>
        <Pressable className='p-2 items-center m-3 bg-green-500 rounded-xl'>
          <Text className='text-white text-2xl font-bold'>
            Buy Now
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default CheckoutScreen