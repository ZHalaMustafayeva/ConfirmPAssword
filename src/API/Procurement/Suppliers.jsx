import { Axios } from "../../Config";
const Index = {
    list: (data) => Axios.get("api/v1/pro/suppliers/list", { params: { data: JSON.stringify(data) } }).then(res => res),
    activity: (data) => Axios.patch(`api/v1/pro/suppliers/activity`, data).then((res) => res),
    index: (data) => Axios.get("api/v1/pro/suppliers", { params: { data } }).then((res) => res),
    store: (data) => Axios.post("api/v1/pro/suppliers", data).then((res) => res),
    show: (uuid) => Axios.get(`api/v1/pro/suppliers/${uuid}`).then(res => res),
    update: (uuid, data) => Axios.put(`api/v1/pro/suppliers/${uuid}`, data).then(res => res),
    delete: (res, uuid) => Axios.delete(`api/v1/pro/suppliers/deactive/${res}/${uuid}`).then(res => res)
}
export default Index;