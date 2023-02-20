/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data/data.json';
import StarRating from '../models/rating';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

//tạm thời dùng trên json
const books = data.books; //sort code
const fetchByRating = books.popular.sort((a, b) => b.rating - a.rating); //sort follow rating
const popularBook = fetchByRating[0]; //most rating book with books.popular
const bookWithMostRating = books.info.find(bookWithMostRating => bookWithMostRating.id === popularBook.id);//most rating book with books.info

function HomeActivity({navigation}) {
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
                <TouchableOpacity 
                style={style.banner}
                onPress={() => {
                    navigation.navigate('BookDetailActivity', {
                        idBook: bookWithMostRating.id
                    });
                }}>
                    <View style={[{width: '100%', height: '100%'}]}>
                        <ImageBackground source={{uri: bookWithMostRating.banner}} style={[style.banner_background]}/>
                        <View style={[style.banner_icon]}>
                            <Ionicons name="bookmarks-outline" size={30} color="#fff" />
                        </View>
                        <View style={[style.banner_title, style.flex_row]}>
                            <View style={[style.flex_column, style.banner_title_item]}>
                                <Text style={[style.banner_title_item_text]}>{bookWithMostRating.title}</Text>
                                <Text style={[style.banner_title_item_text]}>{bookWithMostRating.description}</Text>
                            </View>
                            <View style={[style.flex_column]}>
                                <Text style={[style.banner_title_item_text]}>{bookWithMostRating.author}</Text>
                                <StarRating ratings={popularBook.rating}/>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={[style.list_book]}>
                    <Text style={style.list_book_title}>Sách Nổi Bật</Text>
                    <ScrollView
                    scrollEnabled={true}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                    >
                        {books.info.map((e, index)=>
                            <TouchableOpacity
                            key={index}
                            onPress={() => {
                                navigation.navigate('BookDetailActivity', {
                                    idBook: books.info[index].id
                                });
                            }}>
                                <View style={[style.flex_row, style.list_book_item]}>
                                    <Image style={[style.list_book_image]} source={{uri: books.info[index].image}}/>
                                    <View>
                                        <Text style={[style.list_book_details]}>{books.info[index].title} </Text>
                                        <Text style={[style.list_book_details]}>Like: {books.popular.find(popular => popular.id === books.info[index].id) ? books.popular[index].like : ""}</Text>
                                        <Text style={[style.list_book_details]}>{books.popular.find(popular => popular.id === books.info[index].id) ? <StarRating ratings={books.popular[index].rating}/> : ""}</Text>
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

    info_name: {
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

    banner: {
        position: 'relative',
        height: '30%',
        marginLeft: '4%',
        marginRight: '4%',
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
        marginLeft: '4%',
        marginRight: '4%',
        marginTop: '4%',
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