/* eslint-disable prettier/prettier */
// import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
// import React, { Component } from 'react'
// import { useState, useEffect, useRef } from 'react';


// const widthWindow = Dimensions.get('window').width;
// const heightWindow = Dimensions.get('window').height;

// function SplashActivity({navigation}) {
//     // set Time

//     // setTimeout(() => {
//     //     navigation.navigate('HomeActivity');
//     // }, 2000);
    
//     return (
//         <SafeAreaView style={style.main_project}>
//             <StatusBar hidden={false} backgroundColor='#FFE9BA' />
//                 <View style={style.main_view}>
//                     <View style={style.infor_name}>
//                         <View style={style.name_logo}>
//                             <Image style={style.detail_logo} source={require("../../public/drawble/icon/MaskGroup1.png")}></Image>
//                             <View style={style.detail_name}>
//                                 <Text style={style.detail_name_left}>VIDO</Text>
//                                 <Text style={style.detail_name_right}>Library</Text>
//                             </View>
//                         </View>
//                     </View>
//                     <View style={style.view_design}>
//                         <View style={style.detail_design}>
//                             <Text style={style.text_design}>
//                                 Design by
//                             </Text>
//                             <Text style={style.text_name_design}>
//                                 CNTT Cao Đẳng Viễn Đông
//                             </Text>
//                         </View>
//                     </View>
//                 </View>
//        </SafeAreaView>
//     );
// }

// const style = StyleSheet.create({
//     main_project: {
//         width:'100%', 
//         height:'100%', 
//         backgroundColor:"#FFE9BA"
//     },

//     main_view: {
//         width: widthWindow, 
//         height: heightWindow,
//         position:'relative',
//     },

//     infor_name: {
//         width:'100%', 
//         height:"90%", 
//         position:'relative', 
//         flexDirection:"row", 
//         justifyContent:"center",
//         alignItems:"center"
//     },

//     name_logo: {
//         width:200, 
//         height:200,
//         alignItems:"center"
//     },

//     detail_logo: {
//         width:100, 
//         height:100
//     },

//     detail_name: {
//         width:200,
//         flexDirection:'row',
//         justifyContent:'space-evenly',
//         marginTop: 20
//     },

//     detail_name_left: {
//         fontSize:25, 
//         fontWeight:"bold", 
//         color:"#2F2F2F",
        
//     },

//     detail_name_right: {
//         fontSize:25, 
//         fontWeight:"bold", 
//         color:"#EBA314",
        
//     },

//     view_design: {
//         width:"100%",
//         height:"10%", 
//         flexDirection:"row", 
//         justifyContent:"center", 
//         alignItems:"center"
//     },

//     detail_design: {
//         width:200, 
//         height:200,
//         alignItems:"center",
//         flexDirection:'column', 
//         justifyContent:"center"
//     },

//     text_design: {
//         color:"#2F2F2F", 
//     },

//     text_name_design: {
//         color:"#BFA054", 
//     },

// })

// export default SplashActivity

import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, SafeAreaView, ImageBackground, Image, StatusBar, Animated } from 'react-native';
import React, { Component } from 'react'
import { useState, useEffect, useRef } from 'react';


const widthWindow = Dimensions.get('window').width;
const heightWindow = Dimensions.get('window').height;

function SplashActivity({navigation}) {
    // set Time
    const timeToLogo1 = 3000;
    const timeToLogo2 = 1500;
    const timeToImagePath = 1000

    const LeftMotion = useRef(new Animated.Value(-1100)).current;
    const TopMotion = useRef(new Animated.Value(0.2* heightWindow)).current;
    const SizeMotionLogo = useRef(new Animated.Value(100)).current;
    const FontWeight = useRef(new Animated.Value(100)).current;
    // Image setup animation
    // part 1 Top-Left
    const Path1Top =  useRef(new Animated.Value(-350)).current;
    const Path1Left =  useRef(new Animated.Value(-350)).current;
    // part 2 Bottpm-right
    const Path2Bottom =  useRef(new Animated.Value(-500)).current;
    const Path2Right =  useRef(new Animated.Value(-500)).current;
    // part 3 Bottom-right
    const Path3Bottom =  useRef(new Animated.Value(-500)).current;
    const Path3Right =  useRef(new Animated.Value(-100)).current;
    // part 4 Bottom-right
    const Path4Bottom =  useRef(new Animated.Value(-300)).current;
    const Path4Right =  useRef(new Animated.Value(-250)).current;
    // part 5 Bottom-right
    const Path5Bottom =  useRef(new Animated.Value(-150)).current;
    const Path5Left =  useRef(new Animated.Value(-250)).current;

    useEffect(() => {
        Animated.sequence([
            // Image animation
            Animated.parallel([
                Animated.timing(
                    Path1Top,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path1Left,
                    {
                        toValue: -200,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path2Bottom,
                    {
                        toValue: -200,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path2Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Bottom,
                    {
                        toValue: -400,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Bottom,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Right,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Bottom,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Left,
                    {
                        toValue: -50,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                    
            ]),
            Animated.parallel([
                Animated.timing(
                    LeftMotion,
                    {
                        toValue: 200,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),

                    Animated.timing(
                        SizeMotionLogo,
                        {
                            toValue: 150,
                            duration: timeToLogo1,
                            useNativeDriver: false,
                        }),
                    
            ]),
            
            Animated.parallel([
                
                Animated.timing(
                    Path1Top,
                    {
                        toValue: -130,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path1Left,
                    {
                        toValue: -170,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path2Bottom,
                    {
                        toValue: -200,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path2Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Bottom,
                    {
                        toValue: -350,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Bottom,
                    {
                        toValue: -50,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Right,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Bottom,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Left,
                    {
                        toValue: 0,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    FontWeight,
                    {
                        toValue: 30,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    LeftMotion,
                    {
                        toValue: 50,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),
                    
                Animated.timing(
                    
                    SizeMotionLogo,
                    {
                        toValue: 120,
                        duration: timeToLogo1,
                        useNativeDriver: false,
                    }),
            ]),

            Animated.parallel([
               
                Animated.timing(
                    TopMotion,
                    {
                        toValue: -500,
                        duration: timeToLogo2,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path1Top,
                    {
                        toValue: -350,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path1Left,
                    {
                        toValue: -350,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
                Animated.timing(
                    Path2Bottom,
                    {
                        toValue: -500,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path2Right,
                    {
                        toValue: -500,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Bottom,
                    {
                        toValue: -500,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path3Right,
                    {
                        toValue: -100,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Bottom,
                    {
                        toValue: -300,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path4Right,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Bottom,
                    {
                        toValue: -150,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),

                Animated.timing(
                    Path5Left,
                    {
                        toValue: -250,
                        duration: timeToImagePath,
                        useNativeDriver: false,
                    }),
            ])

        ]).start();
        
    }, [LeftMotion,FontWeight, SizeMotionLogo, TopMotion, Path1Top, Path1Left, Path2Bottom, Path2Right,Path3Right, Path3Bottom, Path4Bottom,Path4Right, Path5Left, Path5Bottom])
 
    setTimeout(() => {
        
        navigation.navigate('LoginActivity');
    }, 8000);
    
    return (
       <SafeAreaView style={{width:'100%', height:'100%'}}>
           <StatusBar hidden={false} backgroundColor='#FF9900'  barStyle="light-content"/>
               <View style={{width: widthWindow, height: heightWindow, position:'relative'}}>
                <Animated.Image style={{position:'absolute', bottom: Path2Bottom, right:Path2Right}} source={require('../../public/drawble/img/Path2.png')}/>
                <Animated.Image style={{position:'absolute', top:Path1Top, left:Path1Left}} source={require('../../public/drawble/img/Path1.png')}/>

                <Animated.Image style={{position:'absolute', bottom:Path4Bottom, right:Path4Right}} source={require('../../public/drawble/img/Path4.png')}/>

                <Animated.Image style={{position:'absolute', bottom:Path3Bottom, right:Path3Right, width:widthWindow*2}} source={require('../../public/drawble/img/Path3.png')}/>
                <Animated.Image style={{position:'absolute', bottom:Path5Bottom, left:Path5Left, width:"90%"}} source={require('../../public/drawble/img/Path5.png')}/>

                <Animated.View style={{width: widthWindow, height: heightWindow, marginTop: TopMotion }}>
                            <View style={{width:'100%', alignItems:'center'}}>
                                <Animated.Image style={{ width:SizeMotionLogo, height: SizeMotionLogo,  }} source={require('../../public/drawble/img/MaskGroup1.png')}/>
                            </View>
                            <Animated.View style={{marginLeft: LeftMotion, width:'500%'}}>
                                <Animated.Text style={{fontSize:FontWeight, fontWeight: 'bold', color: 'white', marginTop: 20}}>
                                    THƯ VIỆN VIỄN ĐÔNG
                                </Animated.Text>
                            </Animated.View>
                        
                    </Animated.View>
               </View>
               
                
       </SafeAreaView>
    );
}

export default SplashActivity