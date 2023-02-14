/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import OtpInputs from 'react-native-otp-inputs';

const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

const TIME = 30;


function AccuracyRegisterActivity({ route, navigation }) {


    const [timeRemaining, setTimeRemaining] = useState(TIME);
    const [getFirshName, setFirshName] = useState('');
    const [getName, setName] = useState('');
    const [getEmail, setEmail] = useState('');
    const [getPasword, setPasword] = useState('');
    const [checked, setchecked] = useState(false);
    const [countdown1, setCountdown] = useState('')
    // code set hide password
    const[getPasswordVisible, setPasswordVisible] = useState(false);

    useEffect(() => {
      if (timeRemaining > 0) {
        const interval = setInterval(() => {
          setTimeRemaining(timeRemaining - 1);
        }, 1000);
        return () => clearInterval(interval);
      }else {
        setCountdown("Gửi Lại Mã")
      }
      
    }, [timeRemaining]);

    const { email,firshname,lastname,pass} = route.params;
    return (
        <SafeAreaView style={style.main_project}>
            <StatusBar hidden={false} backgroundColor='#FBF8F2' barStyle="dark-content"/>
                <View style={style.main_view}>
                <Image style={{position:'absolute', bottom:-500, left:-300}} source={require('../../public/drawble/img/Group33.png')}/>
          <View style={{margin: 20, marginTop:30}}>
            <TouchableOpacity style={{ width:'auto', height:'auto'}}
              onPress={()=> {
                navigation.navigate('RegisterActivity');
              }}>
              <Icon name="arrow-back" size={30} color="#FF8306" />
            </TouchableOpacity>
          </View>

          <View style={{margin: 20}}>
            <Text style={{fontSize: 25, fontWeight:'bold'}}>
              Chứng Thực OTP
            </Text>
            <Text>
              
              Mã OTP được gửi về email: 
              {email.substr(0, 3)}****{email.substr(email.length-3, email.length)}
            </Text>
            <View style={{flexDirection:'row', width:'100%', height: 100, paddingTop: 20, paddingBottom: 20}}>
              <View>
                
                <OtpInputs
                    handleChange={(code) => console.log(code)}
                    numberOfInputs={6}
                    color={'#FF8306'}
                    backgroundColor={'white'}
                    borderRadius={10}
                    width={50}
                    textAlign='center'
                    marginEnd={10}
                    borderWidth={1}
                    borderColor={'#FF8306'}
                />
                 
                <View>
                </View>
              </View>
            </View>
            <Text style={{color:'red', marginTop: 20}}>
              {/* {isValidOTAll ? 'Vui lòng nhập mã OTP': ''} */}
              </Text>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'#898989', marginTop: 50, marginEnd: 10}}
              >
                Gửi lại OTP sau:
              </Text>
              <View style={{marginTop:40 , flexDirection:'row', justifyContent:'space-between', width: '50%'}} >

                {countdown1 != '' ? <TouchableOpacity style={{width:200, height:100, marginTop: 10}}
                    onPress={() => {
                    navigation.navigate('Accuracy'
                    ,{
                        email: email,
                    });
                    }}>
                        <Text style={{color: '#FF8306'}}>
                            {countdown1}
                        </Text>
                </TouchableOpacity>: <View style={{width:200, height:100, marginTop: 10}}>
                  <Text style={{color: '#FF8306'}}>{timeRemaining} seconds</Text>
                </View>}
            
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

export default AccuracyRegisterActivity