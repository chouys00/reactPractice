import req from "./config";

export const getListData = (data) => {
    return req("get", "/data", data)
}

export const getPicList = (data) => {
    return req("get", "/picList", data)
}



