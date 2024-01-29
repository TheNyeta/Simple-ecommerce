import { View, Text, FlatList, ActivityIndicator, Pressable, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import MasonryList from '@react-native-seoul/masonry-list'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('window');

const ProductItem = ({item, index, navigation}) => {
  return (
    <Pressable className='bg-white my-2 rounded-xl' style={{ width: width * 0.45, elevation: 4 }}onPress={() => navigation.navigate('ProductDetail', {item})} >
      <Image className='rounded-t-2xl' style={{ width: width * 0.45, height: width * 0.45 }} source={{uri: item.thumbnail}} resizeMode='cover'/>
      <View className='flex-1 p-2' style={{ width: width * 0.45 }}>
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

  const navigaiton = useNavigation()

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
        <MasonryList
          data={products}
          numColumns={2}
          renderItem={({item, i}) => <ProductItem item={item} index={i} navigation={navigaiton} />}
          scrollEnabled={false}
          contentContainerStyle={{ flex: 1, justifyContent: 'space-between', paddingHorizontal: 12 }}
        />
      }
    </View>
  )
}

export default ProductList