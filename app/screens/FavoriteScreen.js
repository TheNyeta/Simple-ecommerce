import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';
import ProductList from '../components/ProductList';
import Animated, { FadeIn } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const FavoriteScreen = ({navigation}) => {

  const favorite = useSelector((state) => state.favorite.favorite)
  console.log(favorite, 'test')

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1 bg-white' showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 80}}>
        <View className='flex-row items-center' style={{ height: height * 0.07 }}>
          <Text className='m-3 text-black text-2xl font-bold'>
              Favorites
          </Text>
        </View>
        {favorite.length == 0 ?
          <Animated.View className='flex-1 items-center mt-32' entering={FadeIn.delay(300)}>
            <Icon name='heart-off' size={100}/>
            <Text className='text-black text-2xl mt-6'>
              You have no item favorites
            </Text>
          </Animated.View>
          :
          <ProductList products={favorite} key={favorite} />
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default FavoriteScreen