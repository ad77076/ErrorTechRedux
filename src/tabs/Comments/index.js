import React, {useState,useEffect} from 'react';
import {View,Text,FlatList} from 'react-native';
import styles from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { enterComment } from '../../redux/actions';


const Comments=()=>{

    /* Code to get and send data from Redux store respectively. */
    var {post,image,comment}  = useSelector(state => state.engageReducer);
    const dispatch = useDispatch();
    const getCommenttData=()=>dispatch(enterComment());  

    /* Code that calls the function which sends data to the store. */
        useEffect(()=>{
            getCommenttData();
        },[]);

    /* Code that shows individual comment view.  */    
    const renderItem=({item})=>{
        return(
            <View style={styles.eachPost}>
                <Text style={styles.uid}>PostID: {item.postId}</Text>
                <Text style={styles.title}>Name: {item.name}</Text>
                <Text style={styles.title}>Email: {item.email}</Text>       
                <Text style={styles.body}>Body: {item.body}</Text>       
       
            </View> 
        );
    };

    /* Code that calls the list and puts the data in the list. */
    return(
        <View style={styles.container}>
            <FlatList
            data={comment}
            renderItem={renderItem}
            />
        </View>    
    );
};

export default Comments;