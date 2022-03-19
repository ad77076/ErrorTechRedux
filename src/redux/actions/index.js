export const SET_USER_EMAIL='SET_USER_EMAIL';
export const SET_USER_PASSWORD='SET_USER_PASSWORD';
export const LOGIN_STATUS='LOGIN_STATUS';
export const IS_LOGIN='IS_LOGIN';

export const SET_POSTS='SET_POSTS';
export const SET_IMAGE='SET_IMAGE';
export const SET_COMMENT='SET_COMMENT';

export const setLogin=(li)=>{
    return{
        type: IS_LOGIN,
        payload: li,
    };
};

export const setStatus=(log)=>{
    return{
        type: LOGIN_STATUS,
        payload: log,
    };
};

export const setEmail=(email)=>{
    return{
        type: SET_USER_EMAIL,
        payload: email,
    };
};

export const setPassword=(password)=>{
    return{
        type: SET_USER_PASSWORD,
        payload: password,
    };
};

export const setPost=(post)=>{
    return{
        type: SET_POSTS,
        payload: post,
    };
};

export const setImage=(image)=>{
    return{
        type: SET_IMAGE,
        payload: image,
    };
};

export const setComment=(comment)=>{
    return{
        type: SET_COMMENT,
        payload: comment,
    };
};

export const setUser=(formData)=>{
    return async dispatch =>{
        try{
               
            let result= await fetch('https://errortechnologies.com/quizdemo/apis/login',{
               method: 'POST',
               body: formData,
               headers: { 'Content-type': 'multipart/form-data' }
        });
        result=await result.json();

        if(result.data.Message == 'successfully Login'){
            dispatch(setStatus('LOGGED IN'));
            dispatch(setLogin(1));
        }
        else{
            dispatch(setStatus('LOGIN'));
            dispatch(setLogin(-1));

        }

        }catch(error){
            console.warn('Error: '+error);
        }
    };
};

export const enterPost = () => {
    return async dispatch=>{
        try{
            const api_post='https://jsonplaceholder.typicode.com/posts';
            const response=await fetch(api_post);
            const data=await response.json();
            dispatch(setPost(data));
        }catch(err){
            console.warn('Error: '+err)
        }
    }
}

export const enterImage = () => {
    return async dispatch=>{
        try{
            const api_post='https://jsonplaceholder.typicode.com/albums';
            const response=await fetch(api_post);
            const data=await response.json();
            dispatch(setImage(data));
        }catch(err){
            console.warn('Error: '+err)
        }
    }
}

export const enterComment = () => {
    return async dispatch=>{
        try{
            const api_post='https://jsonplaceholder.typicode.com/comments';
            const response=await fetch(api_post);
            const data=await response.json();
            dispatch(setComment(data));
        }catch(err){
            console.warn('Error: '+err)
        }
    }
}


