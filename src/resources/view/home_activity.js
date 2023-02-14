/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import data from '../data/data.json';
import StarRating from '../models/rating';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const fetch = data.books.sort((a, b) => b.rating - a.rating);
const bookWithMostRatings = fetch[0];

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
                    <View style={style.banner}>
                        <ImageBackground source={{uri: bookWithMostRatings.image}} style={[style.banner_background]}/>
                        <View style={[style.banner_icon]}>
                            <IconIonicons name="bookmarks-outline" size={30} color="#fff" />
                        </View>
                        <View style={[style.banner_title, style.flex_row]}>
                            <View style={[style.flex_column, style.banner_title_item]}>
                                <Text style={[style.banner_title_item_text]}>{bookWithMostRatings.title}</Text>
                                <Text style={[style.banner_title_item_text]}>{bookWithMostRatings.description}</Text>
                            </View>
                            <View style={[style.flex_column]}>
                                <Text style={[style.banner_title_item_text]}>{bookWithMostRatings.author}</Text>
                                <StarRating ratings={bookWithMostRatings.rating}/>
                            </View>
                        </View>
                    </View>
                    <View style={[style.list_book]}>
                        <Text style={style.list_book_title}>Popular Books</Text>
                        <ScrollView
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={true}
                        showsVerticalScrollIndicator={true}
                        >
                            {data.books.map((e, index)=>
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => console.log("Item " + index + " pressed!")}>
                                    <View style={[style.flex_row, style.list_book_item]}>
                                        <Image style={[style.list_book_image]} source={{uri: data.books[index].image}}/>
                                        <View>
                                            <Text style={[style.list_book_details]}>{data.books[index].title} </Text>
                                            <Text style={[style.list_book_details]}>Like: {data.books[index].like}</Text>
                                            <Text style={[style.list_book_details]}><StarRating ratings={data.books[index].rating}/></Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </ScrollView>
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

    banner: {
        position: 'relative',
        height: '30%',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 10,
        overflow: 'hidden'
    },

    banner_background: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%'
    },

    banner_icon: {
        display: 'flex',
        position: 'absolute',
        top: 10,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(122, 122, 122, 0.9)',
        width: '14%',
        height: '19%',
        borderRadius: 10,
    },

    banner_title: {
        display: 'flex',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(122, 122, 122, 0.6)',
        width: '100%',
        height: '30%',
        padding: 10,
    },

    banner_title_item: {
        display: 'flex',
        justifyContent: 'center',
    },

    banner_title_item_text: {
        color: '#fff',
    },

    list_book: {
        width: 'auto',
        height: '51%',
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
        alignItems: 'center',
        marginBottom: 10
    },

    list_book_title: {
        marginBottom: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },

    list_book_image: {
        width: 80,
        height: 90,
        borderRadius: 5
    },

    list_book_details: {
        color: 'black',
        marginLeft: 15,
    }
})

export default HomeActivity