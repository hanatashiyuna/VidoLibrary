/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import data from '../data/books.json';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function HomeActivity({navigation}) {
    return (
        <SafeAreaView style={style.main_project}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
                <View style={style.main_view}>
                    <View style={[style.header_view, style.flex_row]}>
                        <View style={[style.header_logo, style.flex_row]}>
                            <Image style={[style.image, style.logo]} source={{uri: 'https://i.pinimg.com/736x/82/33/74/823374b1d22f2c7460ba73bce01acdc0.jpg'}} />
                            <Text style={style.header_logo_text}>Vido Library</Text>
                        </View>
                        <View style={[style.header_icon, style.flex_row]}>
                            <Icon name="bell" size={25} color="#000" />
                            <Icon name="search" size={25} color="#000" />
                        </View>
                    </View>
                    <View style={style.banner}></View>
                    <View style={[style.list_book]}>
                        {data.map((e, index)=>
                            <ScrollView 
                            scrollEnabled={true}
                            horizontal={true}
                            showsHorizontalScrollIndicator={true}
                            showsVerticalScrollIndicator={true}>
                                <TouchableOpacity key={e} style={[style.flex_row, style.list_book_item]}>
                                    <Image style={{width: 80, height: 90}} source={{uri: data[index].image}}/>
                                    <Text style={{color: 'black'}}>{data[index].title} </Text>
                                    <Text style={{color: 'black'}}>design by {data[index].author}</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        )}
                    </View>
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
        display: 'flex',
    },

    infor_name: {
        width:'100%', 
        height:"90%", 
        position:'relative', 
        flexDirection:"row", 
        justifyContent:"center",
        alignItems:"center",
    },

    name_logo: {
        width:200, 
        height:200,
        alignItems:"center",
    },

    detail_logo: {
        width:200, 
        height:200,
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

    header_view: {
        justifyContent: 'space-between',
        margin: 20,
        alignItems: 'center'
    },

    flex_row: {
        display: 'flex',
        flexDirection: 'row',
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

    banner: {
        height: '30%',
        backgroundColor: 'green',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
    },

    list_book: {
        width: 'auto',
        height: 'auto',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
    },

    image: {
        width: 40,
        height: 40
    },

    logo: {
        borderRadius: 50,
    },

    list_book_item: {
        alignItems: 'center'
    }
})

export default HomeActivity