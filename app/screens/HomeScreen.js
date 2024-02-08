import { View, Text, ScrollView, Pressable, TouchableOpacity, StatusBar, Dimensions} from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCarousel from '../components/ImageCarousel';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { addAccount } from '../../redux/reducer/AccountReducer';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({navigation}) => {

  const cart = useSelector((state) => state.cart.cart)
  const totalQuantity = cart.map((item) => item.quantity).reduce((prev, curr) => prev + curr, 0)
  const dispatch = useDispatch()

  useEffect(() => {
    axios.get('https://dummyjson.com/users/1')
      .then(({data}) => {
        dispatch(addAccount(data))
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <SafeAreaView className='flex-1' style={{ paddingTop: height * 0.07 }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}>
        <View className=''>
          <ImageCarousel />
        </View>
        <Text className='m-3 text-black text-3xl font-bold'>
          Categories
        </Text>
        <CategoryList />
        <Text className='mx-3 text-black text-3xl font-bold'>
          New Arival
        </Text>
        <ProductList />
      </ScrollView>
      <View className='flex-row w-full items-center absolute top-0 bg-white' style={{ height: height * 0.07 }}>
        <Pressable className='flex-1 flex-row items-center bg-gray-200 h-10 p-2 ml-3 rounded-md' onPress={() => navigation.navigate('Search')}>
          <Icon name='magnify' size={24} color='gray' />
          <Text>
            Search Items...
          </Text>
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
    </SafeAreaView>
  )
}

export default HomeScreen