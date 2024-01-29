import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const ProductDetailScreen = (props) => {

  const item = props.route.params
  
  return (
    <ScrollView>
      <Text>ProductDetailScreen</Text>
    </ScrollView>
  )
}

export default ProductDetailScreen