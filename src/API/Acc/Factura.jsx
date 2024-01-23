
import { Axios } from "../../Config";

const Index = {
    tableView: (data) => Axios.get('api/v1/acc/factura', { params: { data } }).then(res => res),
    list: (data) => Axios.get("api/v1/acc/factura/list", { params: { ...data } }).then(res => res),
    store: (data) => Axios.post('api/v1/acc/factura', data).then(res => res),
    update: (uuid, data) => Axios.put(`api/v1/acc/factura/${uuid}`, data).then(res => res),
    getDataByUuid: (uuid) => Axios.get(`api/v1/acc/factura/${uuid}`).then(res => res),
    items: (uuid) => Axios.get(`api/v1/acc/factura/items/${uuid}`).then(res => res),
    activity: (data) => Axios.patch(`api/v1/acc/factura/activity`, data).then(res => res),
    contracts: (data) => Axios.get("api/v1/acc/factura/contracts", { params: { ...data } }).then(res => res),
}

export default Index;