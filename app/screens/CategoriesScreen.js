import { View, Text, ScrollView, ActivityIndicator, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductList from '../components/ProductList'
import axios from 'axios'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoriesScreen = (props) => {

  const navigation = props.navigation
  const category = props.route.params.item
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/category/${category}`)
      .then(({data}) => {
        setProducts(data.products)
        setIsLoading(false)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView>
        <View className='flex-row items-center'>
          <Pressable className='m-3' onPress={() => navigation.goBack()}>
            <Icon name='arrow-left' size={30} color='black' />
          </Pressable>
          <Text className='text-black text-2xl font-bold capitalize'>
              {category.replace('-', ' ')}
          </Text>
        </View>
        {isLoading ?
          <ActivityIndicator color={'gray'} size={60}/>
          :
          <ProductList products={products} />
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default CategoriesScreen