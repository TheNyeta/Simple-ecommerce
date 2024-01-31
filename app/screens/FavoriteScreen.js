import { View, Text, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const FavoriteScreen = ({navigation}) => {

  const favorite = useSelector((state) => state.favorite.favorite)
  console.log(favorite)

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}>
        <Text className='m-3 text-black text-2xl font-bold'>
            Favorite
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FavoriteScreen