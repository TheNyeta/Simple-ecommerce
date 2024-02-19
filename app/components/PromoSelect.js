import { View, Text, Pressable } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PromoSelect = () => {
  return (
    <>
      <Pressable className='flex-row items-center justify-between p-3 rounded-lg bg-gray-100' onPress={() => {}}>
        <Text className='text-gray-400 text-md'>
          Use a promo code
        </Text>
        <Icon name='chevron-right' size={30} color='black' />
      </Pressable>
    </>
  )
}

export default PromoSelect