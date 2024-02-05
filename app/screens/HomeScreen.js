import { View, Text, ScrollView, Pressable, TouchableOpacity, StatusBar, Dimensions} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCarousel from '../components/ImageCarousel';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';
import { useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({navigation}) => {

  return (
    <SafeAreaView className='flex-1' style={{ paddingTop: height * 0.07 }}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}>
        {/* <View className='flex-row w-full items-center absolute top-0 bg-white' style={{ height: height * 0.07 }}>
          <Pressable className='flex-1 flex-row items-center bg-gray-200 h-10 p-2 ml-3 rounded-md' onPress={() => navigation.navigate('Search')}>
            <Icon name='magnify' size={24} color='gray' />
            <Text>
              Search Items...
            </Text>
          </Pressable>
          <TouchableOpacity className='p-2' onPress={() => navigation.navigate('Cart')}>
            <Icon name='cart-outline' size={26} color='black' />
          </TouchableOpacity>
        </View> */}
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
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen