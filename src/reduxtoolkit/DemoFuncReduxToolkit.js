import React from 'react'
import {Text, TouchableOpacity, StyleSheet } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'

//import:
import { Like, unLike } from './DemoReduxSlice'

export default function DemoFuncReduxToolkit (props){
    const value = useSelector((state) => state.demoReduxSlice.value)
    const dispatch = useDispatch()
    
    return (
        <View style={styles.container}>
          <Text>{value}</Text>
          <TouchableOpacity onPress={()=> dispatch(Like())}>
            <Text>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> dispatch(unLike())}>
            <Text>unLike</Text>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})