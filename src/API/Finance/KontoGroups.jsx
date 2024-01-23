import { Axios } from "../../Config";

const Index = {
    index: (data) => Axios.get('api/v1/fn/picklist/konto_group', { params: { data } }).then(res => res),
    show: (uuid) => Axios.get(`api/v1/fn/picklist/konto_group/${uuid}`).then(res => res),
    update: (uuid, data) => Axios.put(`api/v1/fn/picklist/konto_group/${uuid}`, data).then(res => res),
    store: (data) => Axios.post('api/v1/fn/picklist/konto_group', data).then(res => res),
    getKontoGroupList: (data) => Axios.get("api/v1/fn/picklist/konto_group/list", { params: { data } }).then(res => res),
    activity: (data) => Axios.patch(`api/v1/fn/picklist/konto_group/activity`, data).then(res => res)
}


export default Index;