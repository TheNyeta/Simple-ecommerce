import { View, Text, FlatList, ActivityIndicator, Pressable, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const { width, height } = Dimensions.get('window');

const productItem = ({item, index}) => {
  return (
    <Pressable className='bg-white my-2 rounded-xl' style={{elevation: 4}}>
      <Image className='rounded-t-2xl' style={{width: width * 0.45, height: width * 0.45}} source={{uri: item.thumbnail}} resizeMode='cover'/>
      <View className='flex-1 p-2' style={{width: width * 0.45}}>
        <Text className='text-black text-md text-wrap'>
          {item.title}
        </Text>
        <Text className='text-black text-lg text-wrap font-bold'>
          {'$' + item.price}
        </Text>
      </View>
    </Pressable>
  )
}

const ProductList = () => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(({data}) => {
        setProducts(data.products)
        setIsLoading(false)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <View className='flex-1'>
      <Text className='mx-3 text-black text-3xl font-bold' >
        New Arival
      </Text>
      { isLoading ? 
        <ActivityIndicator color={'gray'} size={60}/> 
        : 
        <FlatList
          data={products}
          numColumns={2}
          renderItem={productItem}
          scrollEnabled={false}
          columnWrapperStyle={{flex: 1, justifyContent: 'space-between', marginHorizontal: 12}}
        />
      }
    </View>
  )
}

export default ProductList