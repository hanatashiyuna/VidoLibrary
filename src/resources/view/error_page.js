/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated, FlatList, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function ErrorPage(navigation) {
    return (
        <SafeAreaView>
            <Text style={[{display: 'flex', justifyContent: 'center', alignItems: 'center'}]}>Error</Text>
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

export default ErrorPage
