import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RegisterScreen} from '../screens/RegisterScreen';
import {ProtectedScreen} from '../screens/ProtectedScreen';
import {LoginScreen} from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="ProtectedScreen" component={ProtectedScreen} />
      </Stack.Navigator>
    </>
  );
};
