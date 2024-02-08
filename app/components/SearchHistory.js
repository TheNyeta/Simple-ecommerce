import { View, Text, Pressable, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { addToSearchHistory, removeFromSearchHistory } from '../../redux/reducer/SearchReducer';
import { useNavigation } from '@react-navigation/native';

const SearchHistory = () => {

    const navigation = useNavigation()
  const searchHistory = useSelector((state) => state.searchHistory.searchHistory)
  console.log(searchHistory)
  const dispatch = useDispatch()

  const deleteHistory = (keyword) => {
    dispatch(removeFromSearchHistory(keyword))
  }

  const handlePress = (keyword) => {
    dispatch(addToSearchHistory(keyword))
    navigation.replace('SearchResult', {keyword})
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled' >
      {searchHistory.length != 0 &&
        searchHistory.map((keyword) => {
          return (
            <View className='flex-row items-center justify-between mx-3 my-1' key={keyword}>
              <Pressable className='flex-1 flex-row items-center' onPress={() => handlePress(keyword)}>
                <Icon name='clock-outline' size={26} color='gray' />
                <Text className='text-black p-2 text-md'>
                  {keyword}
                </Text>
              </Pressable>
              <Pressable onPress={() => deleteHistory(keyword)}>
                <Icon name='close' size={26} color='gray' />
              </Pressable>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

export default SearchHistory