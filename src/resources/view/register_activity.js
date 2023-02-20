/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function RegisterActivity({navigation}) {
    const [getFirshName, setFirshName] = useState('');
    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPhoneNumber, setPhoneNumber] = useState('');
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
                  <Image source={require('../../public/drawble/icon/MaskGroup1.png')} style={{width:100, height:100}} />
                  <Text style={{fontSize:25, fontStyle:'normal', color: '#F38320', fontWeight:'bold', marginTop: 20}}>CAO ĐẲNG VIỄN ĐÔNG</Text>
                </View>

                <View style={{width: '100%', height: 150, paddingStart: 20, paddingEnd: 20,  marginTop: 0.08* heightWindow}}>
                  <Text style={{ color: '#459173', fontSize:20, fontWeight:'bold', marginBottom:30}}>
                    Đăng Kí
                  </Text>
                  <View style={{width: '100%', height:40, flexDirection:'row', justifyContent:'space-between', paddingStart:10, paddingEnd:10}}>
                    <View style={{width:'40%', height:40, flexDirection:'row'}}>
                    {/* <Icon style={{marginTop: 10}} name="person" size={24}/> */}
                      <TextInput style={{ color: 'black', width: '100%', height:40, paddingStart:10, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                        autoCapitalize = 'none' 
                        value={getFirshName}
                        onChangeText = {setFirshName}
                        placeholder="Họ"
                      />
                    </View>

                    <View style={{width:'40%', height:40, flexDirection:'row'}}>
                      
                      <TextInput style={{ color: 'black', width: '100%', height:40, fontSize:14, borderBottomWidth: 1, borderBottomColor: 'gray' }}
                        autoCapitalize = 'none' 
                        value={getName}
                        onChangeText = {setName}
                        placeholder="Tên"
                      />
                      
                    </View>
                  </View>
                  
                  <View style={{width: '98%', height: 40, flexDirection:'row', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop:20}}>
                    {/* <Icon style={{marginTop: 10}} name="mail" size={24}/> */}
                    <TextInput style={{ color: 'black', width: '100%', height:'100%', marginStart:10, fontSize:14 }}
                      autoCapitalize = 'none' 
                      value={getEmail}
                      onChangeText = {setEmail}
                      placeholder="Email"
                    />

                    
                  </View>

                  <View style={{width: '98%', height: 40, flexDirection:'row', borderBottomWidth: 1, borderBottomColor: 'gray', marginTop:20}}>
                    {/* <Icon style={{marginTop: 10}} name="mail" size={24}/> */}
                    <TextInput style={{ color: 'black', width: '100%', height:'100%', marginStart:10, fontSize:14 }}
                      autoCapitalize = 'none' 
                      value={getPhoneNumber}
                      onChangeText = {setPhoneNumber}
                      placeholder="PhoneNumber"
                    />

                    
                  </View>
                  <View style={{width: '98%', height: 40, flexDirection:'row', marginTop:20,  borderBottomWidth: 1, borderBottomColor: 'gray', paddingRight:0}}>
                    {/* <Icon style={{marginTop: 10}} name="lock" size={24} /> */}
                    <View style={{width: '100%', height: 40, flexDirection:'row'}}>
                      <TextInput style={{ color: 'black', width: '90%', height:40, marginStart:10, fontSize:14 }}
                        autoCapitalize = 'none' 
                        onChangeText = {setPasword}
                        secureTextEntry={getPasswordVisible? false: true}
                        placeholder="Mật Khẩu"
                      /> 
                      <TouchableOpacity style={{width:30, height:40}}
                      onPress={() => {
                          setPasswordVisible(!getPasswordVisible);
                      }}>
                       {
                        getPasswordVisible?
                        <Image source={require('../../public/drawble/img/hidden_eye_icon.png')} style={{width:'100%', height:'100%'}}  resizeMode="contain"/>
                        : 
                        <Image source={require('../../public/drawble/img/eye_icon.png')} style={{width:'100%', height:'100%'}}  resizeMode="contain"/>
                      }
                      </TouchableOpacity> 
                      
                    </View>
                    
                  </View>
                </View>
                
                {/* Submit login */}
                <View style={{ width:'100%', height: 130,marginTop: 0.2*heightWindow}}>
                  <View style={{width:'100%', height:'auto', alignItems:'center'}}>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent:'center', width:'95%',height:60, backgroundColor:'#F38320', borderRadius:10}}
                    onPress = {() => {
                       if (getEmail != "" &&
                        getFirshName != "" &&
                        getName != "" &&
                        getPasword != "" && getPhoneNumber ) {
                        navigation.navigate('AccuracyRegisterActivity'
                       ,{
                        email: getEmail,
                        firshname: getFirshName,
                        lastname: getName,
                        pass: getPasword
                      });
                       }
                    }}
                    >
                        <Text style={{fontSize:25, color:'white'}}>
                            Đăng Kí
                        </Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row', marginTop:20}}>
                      <Text style={{fontSize: 15, marginEnd: 5}}>
                        Đã Có Tài Khoản?
                      </Text>
                      <TouchableOpacity 
                      onPress={() => {
                        navigation.navigate('LoginActivity');
                      }}>
                        <Text style={{color:'#F38320', fontSize: 15}}>
                          Đăng nhập ngay
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

export default RegisterActivity