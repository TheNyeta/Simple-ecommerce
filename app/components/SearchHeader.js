import { View, Text, Pressable, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToSearchHistory } from '../../redux/reducer/SearchReducer';

const { width, height } = Dimensions.get('window');

const SearchHeader = (props) => {

  const navigation = useNavigation()
  const [keyword, setKeyword] = useState(props.keyword == undefined ? '' : props.keyword)
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addToSearchHistory(keyword))
    navigation.replace('SearchResult', {keyword})
  }

  return (
    <View className='flex-row w-full items-center' style={{ height: height * 0.07 }}>
      <TouchableOpacity className='p-2' onPress={() => navigation.goBack()}>
        <Icon name='arrow-left' size={26} color='black' />
      </TouchableOpacity>
      <Pressable className='flex-1 flex-row items-center bg-gray-200 h-10 p-2 rounded-md' onPress={() => navigation.navigate('Search')}>
        <Icon name='magnify' size={24} color='gray' />
        <TextInput className='flex-1 text-left text-md h-10 p-1' value={keyword} onChangeText={(text) => setKeyword(text)} placeholder='Search item...' autoFocus={props.keyword == undefined ? true : false} returnKeyType='search' onSubmitEditing={() => handleSubmit()} />
      </Pressable>
      {/* <TouchableOpacity className='p-1'>
        <Icon name='heart-outline' size={26} color='gray' />
      </TouchableOpacity> */}
      <TouchableOpacity className='p-2' onPress={() => navigation.navigate('Cart')}>
        <Icon name='cart-outline' size={26} color='black' />
      </TouchableOpacity>
    </View>
  )
}

export default SearchHeader