import { View, Text, Pressable, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToSearchHistory } from '../../redux/reducer/SearchReducer';

const { width, height } = Dimensions.get('window');

const SearchHeader = (props) => {

  const navigation = useNavigation()
  const [keyword, setKeyword] = useState(props.keyword == undefined ? '' : props.keyword)
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart.cart)
  const totalQuantity = cart.map((item) => item.quantity).reduce((prev, curr) => prev + curr, 0)

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
      <TouchableOpacity className='p-2' onPress={() => navigation.navigate('Cart')}>
        <Icon name='cart-outline' size={26} color='black' />
        {cart.length != 0 &&
          <View className='absolute right-1 top-0 rounded-full w-5 h-5 bg-red-500 items-center justify-center'>
            <Text className='text-white text-xs'>
              {totalQuantity}
            </Text>
          </View>
        }
      </TouchableOpacity>
    </View>
  )
}

export default SearchHeader