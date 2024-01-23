import { Axios } from "../../Config";

const Index = {
    check: (params) => Axios.get("api/v1/fn/payroll/check", { params: { params } }).then(res => res),
    show: (params) => Axios.get(`/api/v1/fn/payroll/show`, { params }).then(res => res),
    new: (params) => Axios.get('/api/v1/fn/payroll', { params: { params } }).then(res => res),
    store: (data) => Axios.post('/api/v1/fn/payroll/store', data).then(res => res),
    editStatus: (uuid, data) => Axios.put(`/api/v1/fn/payroll/edit-status?uuid=${uuid}`, data).then(res => res),
    update: (data) => Axios.put('/api/v1/fn/payroll/update', data).then(res => res),
    list: (data) => Axios.get("api/v1/fn/payroll/list", { params: { params: JSON.stringify(data) } }).then(res => res)
}


export default Index;