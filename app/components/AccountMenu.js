import { View, Text, Pressable, Dimensions } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const AccountMenu = () => {
  return (
    <View className='flex-1 w-full my-10'>
      <Pressable className='flex-1 flex-row p-2 items-center justify-between'>
        <View className='flex-row items-center'>
          <Icon name='clipboard-list-outline' size={30} color='black' />
          <Text className='text-black text-lg ml-2 font-bold'>
            Order History
          </Text>
        </View>
        <Icon name='chevron-right' size={24} color='black' />
      </Pressable>
      <Pressable className='flex-1 flex-row p-2 items-center justify-between'>
        <View className='flex-row items-center'>
          <Icon name='map-marker-outline' size={30} color='black' />
          <Text className='text-black text-lg ml-2 font-bold'>
            Shipping Address
          </Text>
        </View>
        <Icon name='chevron-right' size={24} color='black' />
      </Pressable>
      <Pressable className='flex-1 flex-row p-2 items-center justify-between'>
        <View className='flex-row items-center'>
          <Icon name='account-edit-outline' size={30} color='black' />
          <Text className='text-black text-lg ml-2 font-bold'>
            Edit Account
          </Text>
        </View>
        <Icon name='chevron-right' size={24} color='black' />
      </Pressable>
      <Pressable className='flex-1 flex-row p-2 items-center justify-between'>
        <View className='flex-row items-center'>
          <Icon name='cog-outline' size={30} color='black' />
          <Text className='text-black text-lg ml-2 font-bold'>
            Setting
          </Text>
        </View>
        <Icon name='chevron-right' size={24} color='black' />
      </Pressable>
      <Pressable className='flex-1 flex-row p-2 items-center justify-between'>
        <View className='flex-row items-center'>
          <Icon name='logout' size={30} color='black' />
          <Text className='text-black text-lg ml-2 font-bold'>
            Log Out
          </Text>
        </View>
        <Icon name='chevron-right' size={24} color='black' />
      </Pressable>
    </View>
  )
}

export default AccountMenu