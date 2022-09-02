import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Button} from 'react-native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="go to pdf"
        onPress={() => {
          console.log('go');
          navigation.navigate('Pdf');
        }}
      />
      <Button
        title="go to pd 2f"
        onPress={() => {
          console.log('go');
          navigation.navigate('Pdf');
        }}
      />
    </View>
  );
}
