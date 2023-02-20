/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import data from '../data/data.json';
import packageJson  from '../../../package.json';
import Pie from 'react-native-pie'

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const user = data.user;

function PersonActivity(navigation) {

    const user_borrow = user[1].quantity / 5 * 100;
    const appVersion = packageJson.version;
    // const tabMenu = ["Thông tin tài khoản", "Quản lý sách của bạn", "Nội quy mượn sách"];
    // const [selectedTab, setSelectedTab] = useState(0);

    // const userInfo = (
    //     <View style={[style.user_info_item]}>
    //         <Text>{user.name}</Text>
    //         <Text>{user.class}</Text>
    //         <Text>{user.mssv}</Text>
    //     </View>
    // );

    // const manageBook = (
    //     <View style={[style.user_info_item]}>
            
    //     </View>
    // );
    
    // const rules = (
    //     <View style={[style.user_info_item]}>
    //         <Text>{user.name}</Text>
    //     </View>
    // );

    // const tabInfo = [
    //     userInfo,
    //     manageBook,
    //     rules,
    // ];

    return (
        <SafeAreaView style={[style.main_view]}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
            <View>
                <View style={[style.header_view, style.flex_row]}>
                    <View style={[style.header_logo, style.flex_row]}>
                        <Image style={[style.image, style.logo]} source={require('../../public/drawble/img/MaskGroup1.png')} />
                        <Text style={style.header_logo_text}>{user.name}</Text>
                    </View>
                    <View style={[style.header_icon, style.flex_row]}>
                        <Text>{user.class}</Text>
                    </View>
                </View>
                {/* <View>
                    <ScrollView
                    style={[style.flex_row, style.tabMenu]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}>
                        {tabMenu.map((e, index) =>
                            <TouchableOpacity
                                key={index}
                                onPress={()=>{
                                    setSelectedTab(index);
                                }}
                                style={[
                                    style.tough,
                                    selectedTab === index ? { borderBottomColor: '#f6b26b' } : { borderBottomColor: '#ccc' }
                                ]}
                            >
                                <Text>{tabMenu[index]}</Text>
                            </TouchableOpacity>
                            )
                        }
                    </ScrollView>
                </View> */}
                <View style={[style.user_info]}>
                    {/* <Text>{tabInfo[selectedTab]}</Text> */}
                    <View style={[style.flex_row, style.chart_card]}>
                        <View style={[{backgroundColor: 'blue'}]}>
                            <Text>afeq </Text>
                            <Text>aasd</Text>
                            <Text>abvfeubfahbf</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', margin: '4%'}}>
                            <Pie
                            radius={80}
                            innerRadius={65}
                            sections={[
                            {
                                percentage: user_borrow,
                                color: '#f6b26b',
                            },
                            ]}
                            backgroundColor="#ddd" />
                            <View style={style.gauge}>
                                <Text style={style.gaugeText}>{user[1].quantity}/5</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={[style.log]}>
                    <Text>Đổi Tài Khoản</Text>
                    <Text>Đăng Xuất</Text>
                    <Text>Version: {appVersion}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main_view: {
        with: widthWindow,
        height: heightWindow,
        backgroundColor:"#FBF8F2"
    },

    flex_row: {
        display: 'flex',
        flexDirection: 'row'
    },
    
    header_view: {
        justifyContent: 'space-between',
        margin: '4%',
        alignItems: 'center'
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

    image: {
        width: 40,
        height: 40
    },

    tabMenu: {
    },

    tough: {
        padding: 10,
        borderBottomWidth: 1,
        width: '30%'
    },

    user_info: {
        margin: '4%',
        marginTop: '1%',
        height: '70%'
    },

    user_info_item: {
    },

    log: {
        margin: '4%',
        marginTop: '1%',
    },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },

    gaugeText: {
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
    },

    chart_card: {
        height: '40%',
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    }
})

export default PersonActivity