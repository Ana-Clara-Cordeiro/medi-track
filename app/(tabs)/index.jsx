import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import { Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Redirect href={'login'}/>
    </View>
  );
};