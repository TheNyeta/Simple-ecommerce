import { View, Text, FlatList, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { categoryImage } from '../constants/constant'
import Animated from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({item, index, navigation}) => {
  return (
    <Pressable className='w-24 items-center' onPress={() => navigation.navigate('Categories', {item})}>
      <View className='bg-gray-200 p-2 rounded-lg items-center justify-center'>
        <Image className='w-10 h-10' source={categoryImage[index]} />
      </View>
      <Text className='text-black text-wrap w-24 text-center capitalize'>
        {item.replace('-', ' ')}
      </Text>
    </Pressable>
  )
}

const CategoryList = () => {

  const [category, setCategory] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const navigaiton = useNavigation()

  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then(({data}) => {
        setCategory(data)
        setIsLoading(false)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <View className='mx-3'>
      { isLoading ? 
        <ActivityIndicator className='my-2' color={'gray'} size={60}/> 
        : 
        <FlatList
          data={category}
          horizontal={true}
          renderItem={({item, index}) => <CategoryItem item={item} index={index} navigation={navigaiton} />}
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  )
}

export default CategoryList