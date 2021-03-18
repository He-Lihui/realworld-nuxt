/**
 * 基于axios请求封装模块
 * 
 * */ 

import axios from 'axios'

const request = axios.create({
    baseURL: 'https://conduit.productionready.io'
})

// 请求拦截器


// 相应拦截器


export default request