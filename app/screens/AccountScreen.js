import { View, Text, ScrollView, Dimensions, ActivityIndicator, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import axios from 'axios';
import AccountMenu from '../components/AccountMenu';

const { width, height } = Dimensions.get('window');

const AccountScreen = () => {

  const [account, setAccount] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://dummyjson.com/users/1')
      .then(({data}) => {
        setAccount(data)
        console.log(data)
        setIsLoading(false)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}>
        <View className='flex-row items-center' style={{ height: height * 0.07 }}>
          <Text className='m-3 text-black text-2xl font-bold'>
            Account
          </Text>
        </View>
        { isLoading ? 
          <ActivityIndicator className='my-2' color={'black'} size={60}/> 
          :
          <View className='flex-1 m-3 items-center'>
            <View className='flex-row items-center'>
              <Image className='rounded-full' style={{ width: width * 0.2, height: width * 0.2 }} resizeMode='cover' source={{uri: account.image}} />
              <View className='flex-1 ml-4'>
                <Text className='text-black text-xl font-bold'>
                  {account.firstName + ' ' + account.lastName}
                </Text>
                <Text className='text-black text-md'>
                  {account.email}
                </Text>
              </View>
            </View>
            <AccountMenu />
          </View> 
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default AccountScreen