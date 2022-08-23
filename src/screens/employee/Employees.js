import { View, Text,Button } from 'react-native'
import React from 'react'


const Employees = ({navigation}) => {
  return (
    <View>
      <Text>Employees</Text>
      <Button title="back" onPress={()=>navigation.goBack()}/>
      <Button title="add" onPress={()=>navigation.navigate('addEmployee')}/>
    </View>
  )
}

export default Employees