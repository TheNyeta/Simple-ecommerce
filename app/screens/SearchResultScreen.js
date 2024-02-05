import { View, Text, ActivityIndicator, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchHeader from '../components/SearchHeader'
import ProductList from '../components/ProductList'
import axios from 'axios'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Animated, { FadeIn } from 'react-native-reanimated'

const SearchResultScreen = (props) => {

  const keyword = props.route.params.keyword
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
      .then(({data}) => {
        setProducts(data.products)
        setIsLoading(false)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <SearchHeader keyword={keyword} />
      <ScrollView>
        {isLoading ?
          <ActivityIndicator className='my-10' color={'black'} size={100}/>
          :
          <>
            {products.length == 0 ? 
              <Animated.View className='flex-1 items-center mt-32' entering={FadeIn.delay(300)}>
                <Icon name='magnify-remove-outline' size={100}/>
                <Text className='text-black text-2xl mt-6 text-center text-wrap w-4/5'>
                  {`No result for ${keyword}`}
                </Text>
              </Animated.View>
              :
              <ProductList products={products} />
            }
          </>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default SearchResultScreen