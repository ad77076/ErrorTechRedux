

import React, {useState,useEffect} from 'react';
import {View,Text,FlatList,StyleSheet} from 'react-native';
import styles from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { enterPost } from '../../redux/actions';

const Posts=()=>{

    /* Code to get and send data from Redux store respectively. */
    var {post,image,comment}  = useSelector(state => state.engageReducer);
    const dispatch = useDispatch();
    const getPostData=()=>dispatch(enterPost());   

    /* Code that calls the function which sends data to the store. */
    useEffect(() => {
        getPostData();
      }, []);

    /* Code that shows individual post view.  */    
    const renderItem = ({ item }) => {
        return (
            <View style={styles.eachPost}>
                <Text style={styles.uid}>UserID: {item.userId}</Text>
                <Text style={styles.title}>Title: {item.title}</Text>
                <Text style={styles.body}>Body: {item.body}</Text>            
            </View> 
        );
    };
    
    /* Code that calls the list and puts the data in the list. */
    return(
        <View style={styles.container}>
            <FlatList
            data={post}
            renderItem={renderItem}
            />
        </View>    
    );
};

export default Posts;