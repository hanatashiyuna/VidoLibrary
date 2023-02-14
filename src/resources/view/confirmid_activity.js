/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function ConfirmID({route, navigation}) {
    const [getFirshName, setFirshName] = useState('');
    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPasword, setPasword] = useState('');
    const [checked, setchecked] = useState(false);

   
    // code set hide password
    const[getPasswordVisible, setPasswordVisible] = useState(false);
    return (
        <SafeAreaView style={style.main_project}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
                <View style={style.main_view}>
                <Image style={{position:'absolute', bottom:-500, left:-300}} source={require('../../public/drawble/img/Group33.png')}/>
                <View style={{marginTop:0.2*widthWindow, width:'100%', height:'auto', alignItems: 'center'}}>
                  <Image source={require('../../public/drawble/img/MaskGroup1.png')} style={{width:100, height:100}} />
                  <Text style={{fontSize:25, fontStyle:'normal', color: '#F38320', fontWeight:'bold', marginTop: 20}}>CAO ĐẲNG VIỄN ĐÔNG</Text>
                </View>

                <View style={{width: '100%', height: 100, paddingStart: 20, paddingEnd: 20,  marginTop: 0.08* heightWindow}}>
                  <Text style={{ color: '#459173', fontSize:20, fontWeight:'bold', marginBottom:30}}>
                    Quên Mật Khẩu
                  </Text>
                  <View style={{width: '90%', height: 40, flexDirection:'row'}}>
                    <Icon style={{marginTop: 10}} name="mail" size={24}/>
                    <TextInput style={{ color: 'black', width: '100%', height:'100%', marginStart:10, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                      autoCapitalize = 'none' 
                      value={getEmail}
                      onChangeText = {setEmail}
                      placeholder="Email"
                    />
                  </View>
                </View>
                {/* set forgot pass and hide pass */}
                <View style={{ alignItems:'flex-end', marginEnd: 20, marginTop: 10}}>
                  <TouchableOpacity
                  onPress = {() => {
                    navigation.navigate('LoginActivity');
                    // navigation.navigate('ComFirmID', {
                    //   email: getEmail
                    // });
                  }}>
                      <Text style={{color:'#F38320'}}>
                        Đăng Nhập
                      </Text>
                  </TouchableOpacity>
                </View>
                {/* Submit login */}
                <View style={{ width:'100%', height: 130,marginTop: 0.2*heightWindow}}>
                  <View style={{width:'100%', height:'auto', alignItems:'center'}}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent:'center', width:'95%',height:60, backgroundColor:'#F38320', borderRadius:10}}
                    onPress = {() => {
                      //navigation.navigate('AccuracyActivity');
                      if (getEmail != '') {
                        navigation.navigate('AccuracyActivity', {
                            email: getEmail
                          });
                      }
                    }}
                    >
                        <Text style={{fontSize:20, color:'white'}}>
                          GỬI MÃ XÁC NHẬN
                        </Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', marginTop:20}}>
                      <Text style={{fontSize: 15, marginEnd: 5}}>
                        Chưa có tài khoản?
                      </Text>
                      <TouchableOpacity 
                      onPress={() => {
                        navigation.navigate('RegisterActivity');
                      }}>
                        <Text style={{color:'#F38320', fontSize: 15}}>
                          Đăng kí ngay
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
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

export default ConfirmID