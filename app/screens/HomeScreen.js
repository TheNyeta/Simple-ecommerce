import { View, Text, ScrollView, Pressable, TouchableOpacity} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageCarousel from '../components/ImageCarousel';
import ProductList from '../components/ProductList';
import CategoryList from '../components/CategoryList';

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className='flex-row items-center m-3'>
          <Pressable className='flex-1 flex-row items-center bg-gray-200 h-10 p-2 rounded-md'>
            <Icon name='magnify' size={24} color='gray' />
            <Text>
              Search Items...
            </Text>
          </Pressable>
          <TouchableOpacity className='p-1'>
            <Icon name='heart-outline' size={26} color='gray' />
          </TouchableOpacity>
          <TouchableOpacity className='p-1'>
            <Icon name='cart-outline' size={26} color='gray' />
          </TouchableOpacity>
        </View>
        <View>
          <ImageCarousel />
        </View>
        <View>
          <CategoryList />
        </View>
        <View>
          <ProductList />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen