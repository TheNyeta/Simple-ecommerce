import { View, Text, FlatList, ActivityIndicator, Pressable, Image, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import MasonryList from '@react-native-seoul/masonry-list'
import axios from 'axios'
import { useNavigation } from '@react-navigation/native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const ProductItem = ({item, index, navigation}) => {
  return (
    <Animated.View entering={FadeInDown.delay(index*100).duration(300).springify()}>
      <Pressable className='bg-white my-2 rounded-xl mx-2' style={{ elevation: 4 }} onPress={() => navigation.navigate('ProductDetail', {item})} >
        <Image className='rounded-t-xl' style={{ width: '100%', height: width * 0.45 }} source={{uri: item.thumbnail}} resizeMode='cover'/>
        <View className='p-2' style={{ width: width * 0.45 }}>
          <Text className='text-black text-md text-wrap'>
            {item.title}
          </Text>
          <Text className='text-black text-lg text-wrap font-bold'>
            {'$' + item.price}
          </Text>
          <View className='flex-row items-center'>
            <Icon name='star' size={20} color='gold' />
            <Text className='text-black text-md'>
            {item.rating}
            </Text>
          </View>
        </View>
      </Pressable>
    </Animated.View>
  )
}

const ProductList = (props) => {

  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const navigaiton = useNavigation()

  useEffect(() => {
    if (props.products !== undefined) {
      setProducts(props.products)
      setIsLoading(false)
    } else {
      axios.get('https://dummyjson.com/products')
        .then(({data}) => {
          setProducts(data.products)
          setIsLoading(false)
        }).catch((error) => {
          console.log(error)
        })
    }
  }, [])

  return (
    <View className='flex-1'>
      { isLoading ? 
        <ActivityIndicator color={'gray'} size={60}/> 
        : 
        <MasonryList
          data={products}
          numColumns={2}
          renderItem={({item, i}) => <ProductItem item={item} index={i} navigation={navigaiton} />}
          scrollEnabled={false}
          contentContainerStyle={{ paddingHorizontal: 6 }}
        />
      }
    </View>
  )
}

export default ProductList