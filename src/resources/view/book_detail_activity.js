/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList, ScrollView } from 'react-native';
import React, { Component, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import data from '../data/data.json';
import ErrorPage from './error_page';
import { Slider } from 'react-native/Libraries/Components/Slider/Slider';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function BookDetailActivity({route, navigation}) {

    const { idBook } = route.params;
    const bookInfo = data.books.info.find(book => book.id === idBook);
    const popularBook = data.books.popular.find(book => book.id === idBook);

    const tab = ["Tóm Tắt", "Mã Sách", "Kệ Sách"];
    const tabInfo = [bookInfo.summary, bookInfo.status];
    const [selectedTab, setSelectedTab] = useState(0);

    return bookInfo ? (
        <SafeAreaView style={style.main_view}>
            <View style={[style.header, style.flex_row]}>
                <View style={[style.header_go_back]}>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.goBack();
                    }}>
                        <Ionicons name="arrow-back-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={style.header_title}>Thông tin sách</Text>
                </View>
                <View style={style.header_icon}>
                    <Ionicons name="bookmarks-outline" size={30} color="#000" />
                </View>
            </View>
            <View style={style.banner}>
                <Image style={[style.image]} source={{uri: bookInfo.banner}}/>
            </View>
            <View style={[style.detail_content]}>
                <View style={[style.flex_row, style.detail_title]}>
                    <View style={[style.detail_title_content_text]}>
                        <Text style={[style.detail_title_text]}>{bookInfo.title}</Text>
                        <Text style={[style.detail_title_description]}>bởi {bookInfo.author}</Text>
                    </View>
                    <View style={[style.detail_title_status]}>
                        <Text>
                            {bookInfo.status ? "Có thể mượn" : "Tạm hết"}
                        </Text>
                    </View>
                </View>
                <View style={[style.flex_row, style.detail_middle]}>
                    <View style={[style.detail_middle_item]}>
                        <Text>NXB</Text>
                        <Text>2021</Text>
                    </View>
                    <View style={[style.detail_middle_item]}>
                        <Text>Phần</Text>
                        <Text>6</Text>
                    </View>
                    <View style={[style.detail_middle_item]}>
                        <Text>Số trang</Text>
                        <Text>340</Text>
                    </View>
                </View>
                <View>
                    <View style={[style.flex_row, style.detail_middle_tab]}>
                        {tab.map((e, index) =>
                                <TouchableOpacity
                                    key={index}
                                    onPress={()=>{
                                        setSelectedTab(index);
                                    }}
                                    style={[
                                        { padding: 10, borderBottomWidth: 1 },
                                        selectedTab === index ? { borderBottomColor: '#f6b26b' } : { borderBottomColor: '#ccc' }
                                    ]}
                                >
                                    <Text>{tab[index]}</Text>
                                </TouchableOpacity>
                            )
                        }
                    </View>
                    <View>
                        <Text>{tabInfo[selectedTab]}</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    ) : (
        <ErrorPage />
    );
}

const style = StyleSheet.create({
    main_view: {
        with: widthWindow,
        height: heightWindow,
        backgroundColor: '#fff',
    },

    flex_row: {
        display: 'flex',
        flexDirection: 'row',
    },

    header: {
        justifyContent: 'space-between',
        margin: '4%'
    },

    header_title: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold'
    },

    banner: {
        height: '30%',
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: '100%'
    },

    detail_content: {
        margin: '4%'
    },

    detail_title: {
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detail_title_content_text: {
    },

    detail_title_text: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },

    detail_title_description: {
        fontSize: 15
    },

    detail_middle: {
        marginTop: '4%',
        justifyContent: 'space-around',
    },

    detail_middle_item: {
        width: '30%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: '3%',
        alignItems: 'center'
    },

    detail_middle_tab: {
        justifyContent: 'space-around',
    }
})

export default BookDetailActivity
