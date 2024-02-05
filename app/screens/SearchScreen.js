import { View, Text } from 'react-native'
import React from 'react'
import SearchHeader from '../components/SearchHeader'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchHistory from '../components/SearchHistory'

const SearchScreen = () => {

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <SearchHeader />
      <SearchHistory />
    </SafeAreaView>
  )
}

export default SearchScreen