import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home')
    }, 2000);
  }, [])

  return (
    <View className='flex-1 justify-center items-center bg-rose-400'>
      <Text>SplashScreen</Text>
    </View>
  )
}

export default SplashScreen