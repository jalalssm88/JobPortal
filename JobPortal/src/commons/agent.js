import Axios from "axios";
const baseUrl = "http://192.168.1.102:5000/";

export default class HttpService {
    static getRequest = (url = "", headers = {}, customUrl = "") => {
        return Axios.get(customUrl ? customUrl : `${baseUrl}${url}`, {
            headers
        }).then((res) => res).catch((err) => err.response)
    }
    static postRequest = (url = "", headers = {}, body = {}) => {
        return Axios.post(`${baseUrl}${url}`, body, {
            headers: { ...headers }
        }).then((res) => res).catch((err) => err.response)
    }
    static putRequest = (url = "", headers = {}, body = {}) => {
        return Axios.put(`${baseUrl}${url}`, body, {
            headers
        }).then((res) => res).catch((err) => err.response)
    }
    static deleteRequest = (url = "", headers = {}, body = {}) => {
        return Axios.delete(`${baseUrl}${url}`, {
            headers,
            data:body
        }).then((res) => res).catch((err) => err.response)
    }
}