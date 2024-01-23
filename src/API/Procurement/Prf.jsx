import { Axios } from "../../Config";

const Index = {
    index: (data) => Axios.get("api/v1/pro/prf", { params: { data } }).then((res) => res),
    print: (params) => Axios.get("api/v1/pro/prf/print", { params: { params } }).then((res) => res),
    orderInformation: (data) => Axios.get("api/v1/pro/prf/order-information", { params: { data } }).then((res) => res),
    productCategory: (data) => Axios.get("api/v1/pro/prf/product-category", { params: { filter: JSON.stringify(data) } }).then((res) => res),
    list: (data) => Axios.get("api/v1/pro/contract/list", { params: { filter: JSON.stringify(data) } }).then((res) => res),
    store: (data) => Axios.post("api/v1/pro/prf", data).then((res) => res),
    star: (data) => Axios.post("api/v1/pro/prf/star", data).then((res) => res),
    show: (uuid) => Axios.get(`api/v1/pro/prf/${uuid}`).then((res) => res),
    update: (uuid, data) => Axios.put(`api/v1/pro/prf/${uuid}`, data).then((res) => res),
    seperate: (uuid, product) => Axios.put(`api/v1/pro/prf/separate?uuid=${uuid}`, product).then(res => res),
    activity: (data) => Axios.patch(`api/v1/pro/prf/activity`, data).then((res) => res),
    delete: (res, uuid) => Axios.delete(`api/v1/pro/prf/deactive/${res}/${uuid}`).then(res => res)
}

export default Index;