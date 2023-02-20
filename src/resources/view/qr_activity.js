/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
// import QRScanner from '../models/qrcode_scanner';
import QRAccount from '../models/qrcode_account';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function QRActivity({navigation}) {
    
    const [getEmail, setEmail] = useState('');
    const [checked, setchecked] = useState(false);
    // code set hide password
    const[getPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={style.main_project}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
                <View style={style.main_view}>
                    {/* <QRScanner /> */}
                    <TouchableOpacity
                style = {{margin:20}}
                  onPress = {() => {
                    navigation.goBack();
                  }}>
                      <Icon name="chevron-left" size={25} color="#F38320" />
                </TouchableOpacity>
                    <QRAccount />
                </View>
       </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main_project: {
        width:'100%', 
        height:'100%', 
        backgroundColor:"#FBF8F2"
    },

    main_view: {
        width: widthWindow, 
        height: heightWindow,
        position:'relative',
    },

   
})

export default QRActivity