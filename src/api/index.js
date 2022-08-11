import { get, put, post, get1 } from "./request.js";

//用户预注册
export const register = params => put("/v1.0.0/front/user/register", params);

//用户预注册人数
export const peopleCount = params =>
    get("/v2.0.0/front/user/people-count", params);

//新闻列表
export const newsList = params => get1("/list", params);
//新闻详情
export const newsDetail = params => get1("/detail", params);
