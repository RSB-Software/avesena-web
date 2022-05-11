import config from '../config.json';
import { authHeader } from '../_helpers';
import axios from 'axios';

export const userService = {
    logout,
    userregister,
    userlogin,
    userloginget
};

async function userregister(data){
    const requestHead = {
        method: "POST",
        headers: authHeader(),
        body:JSON.stringify(data)
    }

    return await fetch(`${config.userRegisterUrl}`,requestHead)
                                .then(handleResponse)
                                .then(result => {
                                    return result;
                                })
                                .catch(error=>{
                                    console.error('Error', error);
                                        return new Promise((resolve, reject) => {
                                            if(Object.keys(error).length > 0){
                                                reject('User not registered, Please try again.');
                                            }else{
                                                reject('User not registered, Please try again.');
                                            }
                                        });
                                    });
}

async function userlogin(data){
    const requestHead = {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body:JSON.stringify(data)
    }

    return await fetch(`${config.userLoginUrl}`,requestHead)
                                .then(handleResponse)
                                .then(result => {
                                    return result
                                })
                                .catch(error => 
                                    {
                                        console.error('Error', error);
                                        return new Promise((resolve, reject) => {
                                            if(Object.keys(error).length > 0){
                                                reject('Invalid credentials.');
                                            }else{
                                                reject('Invalid credentials.');
                                            }
                                        });
                                    });
}

//temporary function for login in json file
async function userloginget(data){
    const response = await fetch('http://localhost:4100/userlist?emailId='+data.emailId+'&userAuth.password='+data.password).catch(console.log);
    return await response.json()
                                .then(result => {
                                    return new Promise((resolve, reject) => {
                                        if(Object.keys(result).length > 0){
                                            resolve({ ok: true, text: () => Promise.resolve(result) });
                                        }else{
                                            reject('Email or password is incorrect');
                                        }
                                    });
                                    //return result; //Object.keys(result).length;
                                });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    localStorage.removeItem('userLoggedIn');
    return true;
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}