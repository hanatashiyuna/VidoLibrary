/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import QRCode from 'react-native-qrcode-svg';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function QRAccount({navigation}) {
    const [getEmail, setEmail] = useState('');
    const [checked, setchecked] = useState(false);
    const [name, setName] = useState("Trần Minh Tân");
    const [mssv, setMSSV] = useState("2006010004");
    const [classroom, setClassroom] = useState("14THDH");
    const [phoneNumber, setPhoneNumber] = useState("0398802442");

    // code set hide password
    const[getPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={style.main_view}>
            <Image style={{position:'absolute', bottom:-500, left:-300}} source={require('../../public/drawble/img/Group33.png')}/>
                
                <View style={{marginTop:0.2*widthWindow, width:'100%', height:'auto', alignItems: 'center'}}>
                  <Image source={require('../../public/drawble/icon/MaskGroup1.png')} style={{width:100, height:100}} />
                  <Text style={{fontSize:25, fontStyle:'normal', color: '#F38320', fontWeight:'bold', marginTop: 20}}>CAO ĐẲNG VIỄN ĐÔNG</Text>
                </View>

                <View style={{width: '100%', height: 150, paddingStart: 20, paddingEnd: 20,  }}>
                    <Text style={{textAlign:'center'}}>Tên Sinh Viên: {name}</Text>
                    <Text style={{textAlign:'center'}}>MSSV: {mssv}</Text>
                    <Text style={{textAlign:'center'}}>Lớp: {classroom}</Text>
                    <Text style={{textAlign:'center'}}>Lớp: {phoneNumber}</Text>

                </View>

                <View style={{ width:'100%', height: 130}}>
                  <View style={{width:'100%', height:'auto', alignItems:'center'}}>
                    {/* <Image source={require('../../public/drawble/qr_code/qrcode.png')} /> */}
                      <QRCode
                        value= {name+"||"+mssv+"||"+classroom+"||"+phoneNumber}
                        size={200}
                        backgroundColor='white'
                        
                      />
                  </View>
                </View>
        </View>
    );
}

const style = StyleSheet.create({
    main_view: {
        width: widthWindow, 
        height: heightWindow,
        position:'relative',
    },
})

export default QRAccount