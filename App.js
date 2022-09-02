/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PdfScreen from './PdfScreen';
import {Button} from 'react-native';
import {HeaderBackButton} from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: '500',
          },
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Pdf"
          component={PdfScreen}
          options={({navigation}) => ({
            headerLeft: () => {
              return <HeaderBackButton onPress={navigation.goBack} />;
            },
            headerRight: () => (
              <Button title="go back" onPress={navigation.goBack} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
