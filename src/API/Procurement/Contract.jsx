import { Axios } from "../../Config";

const Index = {
    list: (data) => Axios.get("api/v1/pro/contract/list", { params: { filter: JSON.stringify(data) } }).then((res) => res),
    store: (data) => Axios.post("api/v1/pro/contract", data).then((res) => res),
    index: (data) => Axios.get("api/v1/pro/contract", { params: { data } }).then((res) => res),
    show: (uuid) => Axios.get(`api/v1/pro/contract/${uuid}`).then((res) => res),
    update: (uuid, data) => Axios.put(`api/v1/pro/contract/${uuid}`, data).then((res) => res),
    activity: (data) => Axios.patch(`api/v1/pro/contract/activity`, data).then((res) => res),
    delete: (data) => Axios.put(`api/v1/pro/contract/delete`, data).then((res) => res),
}

export default Index;