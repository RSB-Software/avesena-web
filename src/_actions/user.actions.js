import { userConstants } from '../_constants';
import { commonConstants } from '../_constants';
import { userService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';
import jwt_decode from "jwt-decode";

export const userActions = {
    logout,
    userregister,
    userlogin
};

function userregister(data){
    return dispatch => {
        dispatch(request(true));

        userService.userregister(data)
            .then(
                result => {
                    dispatch(success(result));
                    
                    const logindata = {
                        "userName":result.userAuth.userName,
                        "password":result.userAuth.password
                    }
                    //console.log("resylt",result);
                    dispatch(alertActions.commonsuccess('User registered successfully'));
                    dispatch(request(false));
                    setTimeout(()=>{ dispatch(alertActions.clear()); 
                        //console.log("resylt",logindata);
                           // dispatch(userlogin(logindata)); 
                    },2000)
                },
                error => {
                    //console.log("error",error);
                    dispatch(alertActions.commonerror(error.toString()));
                    dispatch(request(false));
                    setTimeout(()=>{ dispatch(alertActions.clear());},5000)
                }
            ).catch(
                error=>{
                    //console.log("errorcath",error);
                    dispatch(alertActions.commonerror(error.toString()));
                    dispatch(request(false));
                    setTimeout(()=>{ dispatch(alertActions.clear()); },5000)
                }
            )
    }
}

function userlogin(data){
    return dispatch => {
        dispatch(request(true));

        userService.userlogin(data)
        //userService.userloginget(data)
            .then(
                result => {
                    dispatch(success(result));
                    //dispatch(alertActions.commonsuccess('User registered successfully'));                    
                    var decoded = jwt_decode(result.jwtToken); 
                    var loginData = {
                        'user': decoded
                    }
                    loginData.user['token'] = result.jwtToken;
                    dispatch(updateuserauthdata(loginData));
                    dispatch(request(false));
                    localStorage.setItem('user', JSON.stringify(loginData.user));
                    localStorage.setItem('userLoggedIn',true);
                    window.location.href="/dashboard";
                    //setTimeout(()=>{ dispatch(alertActions.clear()); },5000)
                },
                error => {
                    dispatch(alertActions.commonerror(error));
                    dispatch(request(false));
                    setTimeout(()=>{ dispatch(alertActions.clear());},5000)
                }
            ).catch(
                error=>{
                    dispatch(alertActions.commonerror(error));
                    dispatch(request(false));
                    setTimeout(()=>{ dispatch(alertActions.clear()); },5000)
                }
            )
    }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
    
}

function request(data){
    return {
        type: commonConstants.PASS_ALL_REQUEST,
        data:data
    }
}
function success(data){
    return {
        type: commonConstants.PASS_ALL_SUCCESS,
        data:data
    }
}
function failure(data){
    return {
        type: commonConstants.PASS_ALL_ERROR,
        data:data
    }
}
function updateuserauthdata(data){
    console.log(data);
    
    return {
        type: userConstants.LOGIN_SUCCESS,
        data:data
    }
}