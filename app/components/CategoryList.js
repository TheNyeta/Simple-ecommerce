import { View, Text, FlatList, Pressable, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { categoryImage } from '../constants/constant'

const CategoryItem = ({item, index}) => {
  return (
    <Pressable className='flex-1 w-24 items-center' onPress={() => console.log('dipencet')}>
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
    <View className='flex-1 mx-3'>
      <Text className='my-2 text-black text-3xl font-bold' >
        Categories
      </Text>
      { isLoading ? 
        <ActivityIndicator color={'gray'} size={60}/> 
        : 
        <FlatList
          data={category}
          horizontal={true}
          renderItem={CategoryItem}
          showsHorizontalScrollIndicator={false}
        />
      }
    </View>
  )
}

export default CategoryList