/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

// constructor(props) {
//     super(props)
//     this.state = {Books: [], isLoading = true}
// };

// componentDidMount() {
//     const url = 'https://gist.githubusercontent.com/hanatashiyuna/296227bd13838d1d50c65e234a55c2cf/raw/2ab0a5c8f22f68aa6acae5f441594077fa274853/books.json';
//     return fetch(url)
//     .then((response) =>response.json)
//     .then((responseJson)=>{
//         this.setState({
//             Books:responseJson.books,
//         })
//     })
//     .catch((error)=>{
//         console.error(error);
//     })
// };

function HomeActivity({navigation}) {
    return (
        <SafeAreaView style={style.main_project}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
                <View style={style.main_view}>
                    <FlatList
                        // data={this.state.Books}
                        // renderItem={({item, index})=><Books />} 
                    />
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

    infor_name: {
        width:'100%', 
        height:"90%", 
        position:'relative', 
        flexDirection:"row", 
        justifyContent:"center",
        alignItems:"center"
    },

    name_logo: {
        width:200, 
        height:200,
        alignItems:"center"
    },

    detail_logo: {
        width:200, 
        height:200
    },

    detail_name: {
        fontSize:25, 
        fontWeight:"bold", 
        color:"#005C9D",
        marginTop:100
    },

    view_design: {
        width:"100%",
        height:"10%", 
        flexDirection:"row", 
        justifyContent:"center", 
        alignItems:"center"
    },

    detail_design: {
        width:200, 
        height:200,
        alignItems:"center",
        flexDirection:'column', 
        justifyContent:"center"
    },

    text_design: {
        color:"#005C9D", 
    },

    text_name_design: {
        color:"#27B1FC", 
    },

})

export default HomeActivity