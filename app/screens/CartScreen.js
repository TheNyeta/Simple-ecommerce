import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const CartScreen = ({navigation}) => {

  const cart = useSelector((state) => state.cart.cart)
  console.log(cart)

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
      </ScrollView>
    </SafeAreaView>
  )
}

export default CartScreen