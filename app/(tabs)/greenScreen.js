import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function greenScreen() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container :{
        backgroundColor :'#2f20',
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
})