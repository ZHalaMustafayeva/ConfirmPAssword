import { Axios } from "../../Config";

const Index = {
    getKontoPlan: (data) => Axios.get("api/v1/fn/konto-plans", { params: { data } }).then(res => res),
    getKontoPlanParents: (data) => Axios.get("api/v1/fn/konto-plans/parents", { params: { data } }).then(res => res),
    store: (data) => Axios.post('api/v1/fn/konto-plans', data).then(res => res),
    update: (uuid, data) => Axios.put(`api/v1/fn/konto-plans/${uuid}`, data).then(res => res),
    show: (uuid) => Axios.get(`api/v1/fn/konto-plans/${uuid}`).then(res => res),
    activity: (data) => Axios.patch(`api/v1/fn/konto-plans/activity`, data).then(res => res),
    algorithm: (data) => Axios.get(`api/v1/fn/konto-plan/algorithm`, { params: { data } }).then(res => res),
    delete: (uuid) => Axios.delete(`api/v1/fn/konto-plan/delete/${uuid}`).then(res => res),
    debitCredit: (data) => Axios.get('api/v1/fn/konto-plans/debit-credit', { params: { data } }).then(res => res)
}


export default Index;