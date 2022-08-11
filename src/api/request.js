import axios from "axios";
import qs from "qs";
import store from "@/store";
const instance = axios.create({
    // 创建axios实例，在这里可以设置请求的默认配置  创建一个新的axios实例
    baseURL: process.env.VUE_APP_URL,
    timeout: 30000 // 设置超时时间10s
});
// 文档统一设置post请求头。(post请求一般才需要设置)
instance.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

/** 添加请求拦截器 **/
instance.interceptors.request.use(
    config => {
        if (localStorage.getItem("accessToken")) {
            config.headers.accessToken = localStorage.getItem("accessToken");
        }
        if (config.method === "get") {
            // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
            config.params = {
                ...config.params,
                t: new Date().getTime()
            };
        }
        if (config.method === "post") {
            // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
            config.params = {
                ...config.params,
                t: new Date().getTime()
            };
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

//统一封装get请求
export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: "get",
            url,
            params,
            headers: {
                accessToken: ""
            },
            ...config
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.log("error-", error, error.response);
                reject(error.response.data.exception);
            });
    });
};

//统一封装post请求
export const post = (url, data) => {
    let d = data;
    data = qs.stringify(data);

    return new Promise((resolve, reject) => {
        instance({
            method: "post",
            url,
            data
        })
            .then(response => {
                resolve(response);
            })
            .catch(err => {
                if (
                    err.response.data.exception.error_code == 400403 ||
                    err.response.data.exception.error_code == 400113
                ) {
                    store.dispatch("dateEvents");
                } else {
                    store.dispatch("errorEvents");
                }

                reject(err);
            });
    });
};

//统一封装put请求
export const put = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        instance({
            method: "put",
            url,
            data,
            headers: {
                accessToken: ""
            },
            ...config
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};

const instance1 = axios.create({
    // 创建axios实例，在这里可以设置请求的默认配置  创建一个新的axios实例
    baseURL: process.env.VUE_APP_CES_URL,
    timeout: 30000 // 设置超时时间10s
});
// 文档统一设置post请求头。(post请求一般才需要设置)
instance1.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";

/** 添加请求拦截器 **/
instance1.interceptors.request.use(
    config => {
        if (config.isToken) {
            config.headers.accessToken = localStorage.getItem("accessToken");
        }
        if (config.method === "get") {
            // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
            config.params = {
                ...config.params,
                t: new Date().getTime()
            };
        }
        return config;
    },
    error => {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

//统一封装get请求
export const get1 = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        instance1({
            method: "get",
            url,
            params,
            // headers: {
            //     accessToken: ""
            // },
            ...config
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                console.log("error-", error, error.response);
                reject(error.response.data.exception);
            });
    });
};
