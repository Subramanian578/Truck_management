import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Admin_dashboard from '../screens/Admin/admin_dashboard';
import Login from '../screens/Authentication/login';
import Driver_dashboard from '../screens/Driver/driver_dashboard';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Admin_dashboard" 
        component={Admin_dashboard} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Driver_dashboard" 
        component={Driver_dashboard} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})


