import { View, Text, ScrollView, Pressable, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import OrderSummary from '../components/OrderSummary';
import { useDispatch, useSelector } from 'react-redux';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import PromoSelect from '../components/PromoSelect';
import { cleanCoupon } from '../../redux/reducer/CartReducer';

const { width, height } = Dimensions.get('window');

const CheckoutScreen = ({navigation}) => {

  const address = useSelector((state) => state.account.address)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => dispatch(cleanCoupon())
  }, [])

  const handleOpen = () => bottomSheetRef.current.expand()
  const handleClose = () => bottomSheetRef.current.close()

  const bottomSheetRef = useRef(null);

	const snapPoints = useMemo(() => ["80%"], []);

  const renderBackdrop = useCallback(
		(props) => (
			<BottomSheetBackdrop
				{...props}
				disappearsOnIndex={-1}
				appearsOnIndex={0}
			/>
		),
		[]
	);

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row items-center' style={{ height: height * 0.07 }}>
        <Pressable className='p-2' onPress={() => navigation.goBack()}>
          <Icon name='arrow-left' size={30} color='black' />
        </Pressable>
        <Text className='text-black text-2xl font-bold'>
          Checkout
        </Text>
      </View>
      <ScrollView>
        <View className='mx-3'>
          <Text className='text-black text-lg font-bold'>
            Delivery Address
          </Text>
          <Pressable className='flex-row py-1 justify-between'>
            <View className=''>
              <Text className='text-gray-400 text-md'>
                {address.address}
              </Text>
              <Text className='text-gray-400 text-md'>
                {address.city + ', ' + address.state + ', ' + address.postalCode}
              </Text>
            </View>
            <Icon name='chevron-right' size={30} color='black' />
          </Pressable>
        </View>
        <View className='m-3'>
          <Text className='text-black text-lg font-bold'>
            Order Summary
          </Text>
          <OrderSummary handleOpen={handleOpen} />
        </View>
        <Pressable className='p-2 items-center mx-3 bg-green-500 rounded-xl'>
          <Text className='text-white text-2xl font-bold'>
            Buy Now
          </Text>
        </Pressable>
      </ScrollView>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
        backdropComponent={renderBackdrop}
      >
        <PromoSelect handleClose={handleClose} />
      </BottomSheet>
    </SafeAreaView>
  )
}

export default CheckoutScreen