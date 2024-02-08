import { View, Text, Pressable, Dimensions } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import OrderList from '../components/OrderList';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const OrderHistoryScreen = ({navigation}) => {

  // const [orderHistory, setOrderHistory] = useState([])
  const orderHistory = useSelector((state) => state.orderHistory.orderHistory)
  console.log(orderHistory)
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row items-center' style={{ height: height * 0.07 }}>
          <Pressable className='p-2' onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color='black' />
          </Pressable>
          <Text className='text-black text-2xl font-bold'>
              Order
          </Text>
        </View>
        {orderHistory.length == 0 ?
          <Animated.View className='flex-1 items-center mt-32' entering={FadeIn.delay(300)}>
            <Icon name='note-off-outline' size={100}/>
            <Text className='text-black text-2xl mt-6'>
              You have no order history
            </Text>
          </Animated.View>
          :
          <OrderList />
        }
    </SafeAreaView>
  )
}

export default OrderHistoryScreen