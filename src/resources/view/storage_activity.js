/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, ScrollView } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function StorageActivity({navigation}) {
    
    const [getEmail, setEmail] = useState('');
    const [checked, setchecked] = useState(false);
    // code set hide password
    const[getPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <SafeAreaView style={style.main_project}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
                <View style={style.main_view}>
                    <View style={[style.header_view, style.flex_row]}>
                        <View style={[style.header_logo, style.flex_row]}>
                            <Image style={[style.image, style.logo]} source={require('../../public/drawble/img/MaskGroup1.png')} />
                            <Text style={style.header_logo_text}>Vido Library</Text>
                        </View>
                        <View style={[style.header_icon, style.flex_row]}>
                            <TouchableOpacity
                            onPress={()=>console.log('bell press')}
                            >
                                <Icon name="bell" size={25} color="#000" />
                            </TouchableOpacity>
                            <TouchableOpacity
                            onPress={()=>console.log('search press')}
                            >
                                <Icon name="search" size={25} color="#000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={[style.scrollCategory]}>

                    </ScrollView>

                    <ScrollView horizontal={true} style={[style.scrollMain]}>

                    </ScrollView>
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

    header_view: {
        justifyContent: 'space-between',
        margin: '4%',
        alignItems: 'center'
    },

    flex_row: {
        display: 'flex',
        flexDirection: 'row',
    },

    flex_column: {
        display: 'flex',
        flexDirection: 'column',
    },

    header_logo: {
        width: '35%',
        alignItems: 'center'
    },

    header_logo_text: {
        color: 'black',
        marginLeft: 5,
        marginRight: 5,
    },

    header_text: {
    },

    header_icon: {
        width: '20%',
        justifyContent: 'space-between',
    },
    image: {
        width: 40,
        height: 40
    },

    logo: {
        borderRadius: 50,
    },

    scrollMain: {
        width:'100%',
        
    },

    scrollCategory: {
        width:"100%",
        height:"0%",
        backgroundColor:'red',
        
    }

})

export default StorageActivity