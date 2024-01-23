import { Axios } from "../../Config";

const Index = {
    getSubkontoList: (account) => Axios.get("api/v1/fn/subkonto/list", { params: { account } }).then(res => res),
    list: (account) => Axios.get("api/v1/fn/subkonto/subkonto_list", { params: { account } }).then(res => res),
    index: (data) => Axios.get('api/v1/fn/subkonto', { params: { data } }).then(res => res),
    show: (uuid) => Axios.get(`api/v1/fn/subkonto/${uuid}`).then(res => res),
    update: (uuid, data) => Axios.put(`api/v1/fn/subkonto/${uuid}`, data).then(res => res),
    store: (data) => Axios.post('api/v1/fn/subkonto', data).then(res => res),
    activity: (data) => Axios.patch(`api/v1/fn/subkonto/activity`, data).then(res => res)
}


export default Index;