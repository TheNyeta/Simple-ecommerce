import { View, Text, Pressable, Button, FlatList, Image, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { couponArray } from '../constants/constant'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useDispatch } from 'react-redux'
import { addCoupon } from '../../redux/reducer/CartReducer'

const { width, height } = Dimensions.get('window');

const PromoSelect = (props) => {

  const [selectedCoupon, setSelectedCoupon] = useState({})
  const dispatch = useDispatch()

  const setCoupon = () => {
    dispatch(addCoupon(selectedCoupon))
    props.handleClose()
  }

  const handleToggleCoupon = (coupon) => {
    setSelectedCoupon((prevSelectedCoupon) => {
      if (prevSelectedCoupon == coupon) {
        return {}; // Deselect the coupon if it's already selected
      } else {
        return coupon; // Select the coupon if it's not selected
      }
    });
  };

  const renderItem = ({item, index}) => {
    const isSelected = selectedCoupon == item;

    return (
      <Pressable className='flex-row  mx-4 my-2 rounded-xl bg-white' style={{backgroundColor: isSelected ? 'lightgreen' : 'white', elevation: 4, shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62 }} key={index} onPress={() => handleToggleCoupon(item)} >
        <Image className='rounded-xl' source={item.image} style={{ width: width * 0.3, height: width * 0.3 }} />
        <View className='flex-1 p-2 justify-between'>
          <View className='flex-1 justify-between'>
            <Text className='text-black text-lg font-bold text-wrap' numberOfLines={2} >
              {item.title}
            </Text>
          </View>
        </View>
      </Pressable>
    )
  }

  return (
    <View className='flex-1'>
      <Text className='ml-4 text-black text-xl font-bold'>
        Select Promo Code
      </Text>
      <BottomSheetFlatList 
        data={couponArray}
        renderItem={renderItem}
        scrollEnabled={true}
        extraData={selectedCoupon}

      />
      <Pressable className='p-2 m-4 items-center bg-green-500 rounded-lg' onPress={() => setCoupon()}>
        <Text className='text-white text-xl font-bold'>
          Confirm Promo
        </Text>
      </Pressable>
    </View>
  )
}

export default PromoSelect