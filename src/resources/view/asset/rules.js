/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function Rules({navigation}) {
    return (
        <SafeAreaView style={[{display: 'flex', justifyContent: 'center', alignItems: 'center'}]}>
            <Text>- Mỗi sinh viên mượn tối đa 5 quyển/lần</Text>
            <Text>- Thời gian mượn tối đa 1 tuần (7 ngày), có thể gặp thủ thư để gia hạn</Text>
            <Text>- Quá thời gian nộp sẽ phạt 5k/quyển</Text>
            <Text>- Không gây mất trật tự, ồn</Text>
            <Text>- Không mang đồ ăn, nước ngọt vào thư viện</Text>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main_view: {
        with: widthWindow,
        height: heightWindow,
        backgroundColor: '#fff'
    },

    flex_row: {
        display: 'flex',
        flexDirection: 'row',
    },
})

export default Rules
