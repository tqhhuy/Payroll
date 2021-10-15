// api/axiosClient.js
import axios from 'axios';
import queryString from 'query-string';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import Authorise from './authorise.js';
// Set up default config for http requests here

// Please have a look at here `https://github.com/axios/axios#request-config` for the full list of configs

const axiosClient = axios.create({
baseURL: process.env.REACT_APP_API_URL,
headers: {
'content-type': 'application/json',
},
paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
const currentUser = firebase.auth().currentUser;
if(currentUser){
    // var tokenTxt = ''; tokenTxt= currentUser.getIdToken();
    // const response = Authorise.getTokenAuthen(tokenTxt);
    // config.headers.Authorization =`Bearer ${response}`;
}
return config;
})
axiosClient.interceptors.response.use((response) => {
if (response && response.data) {
return response.data;
}
return response;
}, (error) => {
// Handle errors
throw error;
});
export default axiosClient;