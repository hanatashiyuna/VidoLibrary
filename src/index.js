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

//Màng hình ứng dụng

import HomeActivity from './resources/view/home_activity';
import BookDetailActivity from './resources/view/book_detail_activity';

//Thông tin user
import PersonActivity from './resources/view/person_activity';

// QR code

import QRActivity from './resources/view/qr_activity';
import QRAccount from './resources/models/qrcode_account';

//Màn hình kho sách
import StorageActivity from './resources/view/storage_activity';

//Nội quy thư viện
import Rules from './resources/view/asset/rules';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity style={{
    top: -30,
    justifyContent:'center',
    width:70,
    height:70,
    borderRadius:50,
    borderWidth:4,
    borderColor:'#FBF8F2'
    // borderColor:'red'

  }}
  onPress= {onPress}>
    <View style={{
      width:'100%',
      height:'100%',
      backgroundColor:'#F38320',
      borderRadius:35
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

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
      }}  component={StorageActivity} />


      <Tab.Screen name="QRActivity" component={QRActivity} 
        options={{
          tabBarStyle: { display: "none" },
          tabBarLabel:'',
          tabBarIcon:({focused}) =>(
            <View style={{paddingTop:15}}>
              <Icon  name="qrcode" size={30} color="white"/>
            </View>
          ), 
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}/>
          )
          }}
       />

        <Tab.Screen name="a" options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="book" color={color} size={30} />
        )
      }}  component={HomeActivity} />
        <Tab.Screen name="person" options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
        )
      }}  component={PersonActivity} />
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
          <Stack.Navigator initialRouteName="PersonActivity" screenOptions={{headerShown: false}}>
            <Stack.Screen name="SplashActivity" component={SplashActivity} />
            <Stack.Screen name="LoginActivity" component={LoginActivity} />
            <Stack.Screen name="RegisterActivity" component={RegisterActivity} />
            <Stack.Screen name="HomeActivity" component={BottomBar} />
            <Stack.Screen name="ConfirmID" component={ConfirmID} />
            <Stack.Screen name="AccuracyActivity" component={AccuracyActivity} />
            <Stack.Screen name="AccuracyRegisterActivity" component={AccuracyRegisterActivity} />
            <Stack.Screen name="BookDetailActivity" component={BookDetailActivity} />
            {/* <Stack.Screen name="AroundMap" component={AroundMap} />
            <Stack.Screen name="LocationDetail" component={LocationDetail} /> */}
            <Stack.Screen name="QRActivity" component={QRActivity} />
            {/* <Stack.Screen name="AroundMap" component={AroundMap} /> */}
            <Stack.Screen name="PersonActivity" component={PersonActivity} />
            <Stack.Screen name="Rules" component={Rules} />
          </Stack.Navigator>
        </NavigationContainer>
        // <View>
        //   <Text>hi</Text>
        // </View>
    );
}

export default RootComponent