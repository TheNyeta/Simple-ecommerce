import { View, Text, FlatList, Pressable, Image, Dimensions, TextInput } from 'react-native'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/reducer/CartReducer';
import Animated, { FadeInDown, FadeOut, FadeOutLeft, LinearTransition } from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

const CartItem = ({item, index, incrementQuantity, decrementQuantity, deleteProduct}) => {
  return (
    <Animated.View className='flex-row p-4 my-2 rounded-xl bg-white' style={{ elevation: 4, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62 }} entering={FadeInDown.delay(index * 100 + 200).springify()} exiting={FadeOutLeft} >
      <Pressable>
        <Image className='rounded-xl' source={{uri: item.thumbnail}} style={{ width: width * 0.3, height: width * 0.3 }} />
      </Pressable>
      <View className='flex-1 ml-3 justify-between'>
        <View>
          <Text className='text-black text-lg text-wrap' numberOfLines={2} >
            {item.title + 'test aja ini kalo gini kenapa'}
          </Text>
          <Text className='text-black text-lg text-wrap font-bold'>
            {item.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </Text>
        </View>
        <View className='flex-row justify-between items-center'>
          <View className='flex-row px-1 items-center rounded-lg border-2'>
            <Pressable onPress={() => decrementQuantity(item)}>
              <Icon name='minus' size={20} color='black' />
            </Pressable>
            <TextInput value={String(item.quantity)} className='bg-white text-center text-lg w-8 h-8 p-1' />
            <Pressable onPress={() => incrementQuantity(item)} disabled={item.quantity == item.stock ? true : false} >
              <Icon name='plus' size={20} color={item.quantity < item.stock ? 'black' : 'lightgray'} />
            </Pressable>
          </View>
          <Pressable onPress={() => deleteProduct(item)}>
            <Icon name='delete' size={20} color='black' />
          </Pressable>
        </View>
      </View>
    </Animated.View>
  )
}

const ProductCartList = () => {

  const cart = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch()

  const incrementQuantity = (item) => {
    if (item.quantity <= item.stock) {
      dispatch(increaseQuantity(item))
    }
  }

  const decrementQuantity = (item) => {
    dispatch(decreaseQuantity(item))
  }

  const deleteProduct = (item) => {
    dispatch(removeFromCart(item))
  }

  return (
    <View className='flex-1'>
      <Animated.FlatList 
        data={cart}
        renderItem={({item, index}) => <CartItem item={item} index={index} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} deleteProduct={deleteProduct} />}
        scrollEnabled={true}
        itemLayoutAnimation={LinearTransition.delay(500)}
        removeClippedSubviews={false}
        contentContainerStyle={{flex: 1, padding: 12}}
      />
    </View>
  )
}

export default ProductCartList