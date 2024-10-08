import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Admin_dashboard from '../screens/Admin/admin_dashboard';
import Login from '../screens/Authentication/login';
import Driver_dashboard from '../screens/Driver/driver_dashboard';
import Assign_drivers from '../screens/Admin/Job_assign/assign_Drivers';
import Add_Driver from '../screens/Admin/Driver_page/Add_Driver';
import EnableLocationScreen from '../screens/Authentication/location';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Enable_Location">
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
      <Stack.Screen 
        name="Assign_drivers" 
        component={Assign_drivers} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Add_Driver" 
        component={Add_Driver} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Enable_Location" 
        component={EnableLocationScreen} 
        options={{ headerShown: false }} 
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})


