import React, {useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import styles from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { enterImage } from '../../redux/actions';

const Images=()=>{

    /* Code to get and send data from Redux store respectively. */
    var {post,image,comment}  = useSelector(state => state.engageReducer);
    const dispatch = useDispatch();
    const getImagetData=()=>dispatch(enterImage());   

    /* Code that calls the function which sends data to the store. */
        useEffect(()=>{
            getImagetData();
        },[]);

    /* Code that shows individual image view.  */    
        const renderItem=({item})=>{
            return(
                <View style={styles.eachPost}>
                    <Text style={styles.uid}>UserID: {item.userId}</Text>
                    <Text style={styles.title}>Title: {item.title}</Text>       
                </View> 
            );
        };




    /* Code that calls the list and puts the data in the list. */
    return(
        <View style={styles.container}>
            <FlatList
            data={image}
            renderItem={renderItem}
            />
        </View>    
    );
};

export default Images;