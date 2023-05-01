import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{marginLeft:15, marginTop:30, alignItems:'center'}}>
      <Text style={{fontWeight:'bold', fontSize:28}}>
        Notes App
      </Text>
    </View>
  )
}

export default Header