/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
//Màng hình chờ

import SplashActivity from './resources/view/splash_activity';

//Màng Hình đăng kí/đăng nhập

import LoginActivity from './resources/view/login_activity';

import RegisterActivity from './resources/view/register_activity';

import ConfirmID from './resources/view/confirmid_activity';

import AccuracyActivity from './resources/view/accuracy_activity';

import AccuracyRegisterActivity from './resources/view/accuracy_register_activity';

//Màng hình trang chủ

import HomeActivity from './resources/view/home_activity';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomBar() {
    return (
      <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: '#f6b26b',
      tabBarActiveBackgroundColor: 'white',
      tabBarInactiveTintColor: 'gray',
      tabBarInactiveBackgroundColor: 'white',
      tabBarStyle: {backgroundColor: 'white', height:55 }}}>
        <Tab.Screen name="Home" options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={30} />
          )
      }}  component={HomeActivity} />
        <Tab.Screen name="storage" options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
              <Icon name="bookmark" color={color} size={30} />
          )
      }}  component={HomeActivity} />
        <Tab.Screen name="a" options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={30} />
        )
      }}  component={HomeActivity} />
        <Tab.Screen name="c" options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
        )
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
          <Stack.Navigator initialRouteName="HomeActivity" screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashActivity" component={SplashActivity} />
            <Stack.Screen name="LoginActivity" component={LoginActivity} />
            <Stack.Screen name="RegisterActivity" component={RegisterActivity} />
            <Stack.Screen name="HomeActivity" component={BottomBar} />
            <Stack.Screen name="ConfirmID" component={ConfirmID} />
            <Stack.Screen name="AccuracyActivity" component={AccuracyActivity} />
            <Stack.Screen name="AccuracyRegisterActivity" component={AccuracyRegisterActivity} />
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