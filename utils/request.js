/**
 * 基于axios请求封装模块
 * 
 * */ 

import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

// 请求拦截器
axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error)
})

// 相应拦截器


export default request