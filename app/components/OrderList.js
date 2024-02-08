import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const OrderList = () => {

  const orderHistory = useSelector((state) => state.orderHistory.orderHistory)

  return (
    <View>
      <Text>OrderList</Text>
    </View>
  )
}

export default OrderList