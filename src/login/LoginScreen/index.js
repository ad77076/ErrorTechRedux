import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';

import {View,Text,Image,Button, useWindowDimensions} from 'react-native';
import styles from './styles';
import Logo from '../../../assets/images/app_logo.png'
import CustomInput from '../CustomInput';
import CustomButton from '../CustomButton';
import {useNavigation} from '@react-navigation/native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Engage from '../../../final_comp/Engage';
import App from '../../../App';
import { useSelector, useDispatch } from 'react-redux';
import {setEmail,setPassword,setUser,setStatus} from '../../redux/actions';





const LoginScreen=({navigation})=>{

    
/* Here's the code that reads and sends data into the Redux store. */
  const {loggedIn,login}  = useSelector(state => state.statusReducer);
  const {email,password} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const changeEmail = (z)  => dispatch(setEmail(z));
  const changePassword = (w) => dispatch(setPassword(w));
  const changeStatus=(l)=>dispatch(setStatus(l));
  const checkUser=(fd)=>dispatch(setUser(fd));

  /* Code that navigates to home page once user verification is complete. */
    useEffect(() => {
        if(loggedIn == 1){
        navigation.navigate('Engage');}
      });

   /* Code that takes the entered info and sends for checking. */   
    async function onLoginPressed(){
        changeStatus('LOADING...');
        var formData = new FormData();
        formData.append('email',email);
        formData.append('password',password);
        checkUser(formData);
    }

    

const {height}=useWindowDimensions();

/* Code that renders the login page. */
    return(
        <View style={styles.rootLook}>
            <Image
            source={Logo}
            style={[styles.logoLook,{height:height*0.3}]}
            resizeMode='contain' />
            <CustomInput 
            placeholder='Email' 
            value={email} 
            setValue={(setMail)=>{changeEmail(setMail)}} />
            <CustomInput 
            placeholder='Password' 
            value={password} 
            setValue={(setPass)=>{changePassword(setPass)}} 
            secureTextEntry={true} 
            keyboardType='numeric'/>
            <CustomButton onPress={onLoginPressed} showText={login}/>

            <Text>{email} - {password} - {loggedIn}</Text>

        </View>
    );
};

export default LoginScreen;