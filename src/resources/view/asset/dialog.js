/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react';
import { useState, useEffect, useRef } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;



const Dialog = (props) => {

    

    // const topMotion = useRef(new Animated.Value(-(Dimensions.get('window').height))).current;
    // console.log("kaka")
    // if (props.topMotion < 0) {
    //     topView(props.topMotion);
    //     console.log("kaka")
    // }

    const bottomView = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(props.topMotion, {
          toValue: (-(Dimensions.get('window').height)),
          duration: 500,
          useNativeDriver: false
        }).start();
    };

    return (
       
            <Animated.View style={[style.card, {bottom:props.topMotion}]}>
                <View style={[style.captionHeader]}>
                    <Text style={[style.textCaptionHeader]}>{props.captionHeader}</Text>
                </View>
                <View style={[style.captionBody]}>
                    <Text style={[style.textCaptionBody]}>{props.captionBody}</Text>
                </View>

                 <TouchableOpacity
                    onPress={() => {
                        bottomView();
                    }}
                    style={[style.Agree, {borderColor: '#FF6347',}]}
                >
                    <Text style={[style.textAgree, {color: 'white'}]}>{props.textAgree}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        bottomView();
                    }}
                    style={[style.exit, {borderColor: '#FF6347', borderWidth: 1}]}
                >
                    <Text style={[style.textExit, {color: '#FF6347'}]}>X</Text>
                </TouchableOpacity>
            </Animated.View>
 
    );
}

export default Dialog;
const style = StyleSheet.create({

    main_view: {
        width: widthWindow, 
        height: heightWindow,
        backgroundColor:'rgba(0,0,0,0.1)',
    },

    flex_row: {
        display: 'flex',
        flexDirection: 'row',
    },

    card: {
        width:"95%",
        height:"25%",
        backgroundColor:"white",
        position:'absolute',
        left:10,
        borderRadius: 20,
      },
      textExit: {
        fontSize: 10,
        fontWeight: 'bold'
    },

    exit: {
        position:"absolute",
        top:5,
        right:5,
        width: 30,
        height:30,
        padding:7,
        margin:5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor:'white'
    },

    captionHeader: {
        width:'100%',
        height:"25%",
        borderColor: 'black',
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    textCaptionHeader: {
        fontSize:20,
        fontWeight:'bold'
    },

    captionBody: {
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        height:"55%"
    },

    textCaptionBody: {
        fontSize:15,
    },

    Agree: {
        width:'100%',
        height:"20%",
        backgroundColor:'#F38320',
        borderBottomEndRadius:20,
        borderBottomStartRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },

    textAgree: {
        textAlign:'center',
        fontSize:15,
        fontWeight:'bold'
    },
})


