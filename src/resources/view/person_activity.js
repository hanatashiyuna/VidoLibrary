/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, Dimensions, SafeAreaView, Image, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState, useRef, useEffect } from 'react';
import data from '../data/data.json';
import packageJson  from '../../../package.json';
import Pie from 'react-native-pie'

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const user = data.user;

function PersonActivity({navigation}) {

    const user_borrow = user[1].prestige;
    const color_chart = user[1].prestige >= 80 ? '#7afd40' : user[1].prestige > 30 ? '#f6b26b' : '#ff0000';
    const appVersion = packageJson.version;
    const slogan_prestige = [
        "Bạn đã làm rất tốt để giữ vững uy tín của mình, hãy tiếp tục nỗ lực để duy trì thành tích tuyệt vời này nhé!",
        "Hãy cố gắng nỗ lực hơn để nâng cao uy tín của mình.",
        "Uy tín của bạn cần được cải thiện để đạt được kết quả tốt hơn. Hãy cố gắng nỗ lực hơn nhé!"
    ] ;
    // const tabMenu = ["Thông tin tài khoản", "Quản lý sách của bạn", "Nội quy mượn sách"];

    return (
        <SafeAreaView style={[style.main_view]}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
            <View>
                <View style={[style.header_view, style.flex_row]}>
                    <View style={[style.header_logo, style.flex_row]}>
                        <Image style={[style.image, style.logo]} source={require('../../public/drawble/img/MaskGroup1.png')} />
                        <Text style={style.header_logo_text}>{user[0].name}</Text>
                    </View>
                    <View style={[style.header_icon, style.flex_row]}>
                        <Text>{user[0].class}</Text>
                    </View>
                </View>
                <View style={[style.user_info]}>
                    <View style={[style.flex_row, style.chart_card]}>
                        <View style={[{width: '39%', margin: '4%', display: 'flex', justifyContent: 'center', alignItems: 'center'}]}>
                            <Text>Sách đã mượn: {user[1].quantity}/5</Text>
                            <Text>{user[1].prestige >= 80 ? slogan_prestige[0] : user[1].prestige > 30 ? slogan_prestige[1] : slogan_prestige[2]}</Text>
                        </View>
                        <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', margin: '4%'}}>
                            <Pie
                            radius={80}
                            innerRadius={65}
                            sections={[
                            {
                                percentage: user_borrow,
                                color: color_chart,
                            },
                            ]}
                            backgroundColor="#ddd" />
                            <View style={style.gauge}>
                                <Text style={style.gaugeText}>{user[1].prestige}/100</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[{backgroundColor: '#fff', padding: '4%', borderRadius: 10, marginTop: '4%'}]}>
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Rules');
                        }}>
                            <Text>Thông tin tài khoản</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{backgroundColor: '#fff', padding: '4%', borderRadius: 10, marginTop: '4%'}]}>
                        <TouchableOpacity
                        onPress={()=>{
                            navigation.navigate('Rules');
                        }}>
                            <Text>Nội quy thư viện</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[style.log]}>
                    <Text style={[{fontSize: 16}]}>Đổi Tài Khoản</Text>
                    <Text style={[{color: 'red', fontSize: 16}]}>Đăng Xuất</Text>
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
        backgroundColor:"#FBF8F2",
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
    fontSize: 22,
    },

    chart_card: {
        height: '40%',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    }
})

export default PersonActivity