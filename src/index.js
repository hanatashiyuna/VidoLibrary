/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Màng hình chờ

import SplashActivity from './resources/view/splash_activity';

//Màng Hình đăng kí/đăng nhập

import LoginActivity from './resources/view/login_activity';

import RegisterActivity from './resources/view/register_activity';

//Màng hình trang chủ

import HomeActivity from './resources/view/home_activity';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomBar() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: 'black',
      tabBarActiveBackgroundColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarInactiveBackgroundColor: 'white',
      tabBarStyle: {backgroundColor: 'white', height:55 }}}>
        <Tab.Screen name="Home" options={{
          tabBarLabel: 'Trang Chủ',
          // tabBarIcon: ({ color }) => (
          //     <Icon name="map-marker-alt" color={color} size={20} />
          // )
      }}  component={HomeActivity} />
      {/* <Tab.Screen name="Transfer" options={{
          tabBarLabel: 'Di chuyển',
          tabBarIcon: ({ color }) => (
              <Icon name="car-alt" color={color} size={20} />
          )
      }}  component={Transfer} /> */}
        
        
      </Tab.Navigator>
    );
  }

function RootComponent({}) {
    return (
        <NavigationContainer>
        {/* Rest of your app code */}
          <Stack.Navigator initialRouteName="SplashActivity" screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashActivity" component={SplashActivity} />
            <Stack.Screen name="LoginActivity" component={LoginActivity} />
            <Stack.Screen name="RegisterActivity" component={RegisterActivity} />
            <Stack.Screen name="HomeActivity" component={BottomBar} />
           

            {/* <Stack.Screen name="AroundMap" component={AroundMap} />
            <Stack.Screen name="LocationDetail" component={LocationDetail} /> */}
  
          </Stack.Navigator>
        </NavigationContainer>
        // <View>
        //   <Text>hi</Text>
        // </View>
    );
}

export default RootComponent