import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AccountScreen = () => {
  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}>
        <Text className='m-3 text-black text-2xl font-bold'>
            Account
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountScreen