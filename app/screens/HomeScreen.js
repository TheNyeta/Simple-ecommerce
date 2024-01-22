import { View, Text, ScrollView, Pressable, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCarousel from '../components/ImageCarousel';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView>
        <View className='flex-row items-center p-3 bg-rose-400'>
          <Pressable className='flex-1 flex-row items-center bg-gray-200 h-10 p-2 rounded-md'>
            <Icon name='magnify' size={24} color='gray' />
            <Text>
              Search Items...
            </Text>
          </Pressable>
          <TouchableOpacity className='p-1'>
            <Icon name='heart-outline' size={26} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity className='p-1'>
            <Icon name='cart-outline' size={26} color='gray' />
          </TouchableOpacity>
        </View>
        <View>
          <ImageCarousel />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen