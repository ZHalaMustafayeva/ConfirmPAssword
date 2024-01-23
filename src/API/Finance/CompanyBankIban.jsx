import { Axios } from "../../Config";

const Index = {
    table: (data) => Axios.get('api/v1/fn/company-bank-iban/table', { params: { data } }).then(res => res),
    // show: (uuid) => Axios.get(`api/v1/fn/account_transaction/${uuid}`).then(res => res),
    // update: (uuid, data) => Axios.put(`api/v1/fn/account_transaction/${uuid}`, data).then(res => res),
    // store: (data) => Axios.post('api/v1/fn/account_transaction', data).then(res => res),
    // delete: (uuid) => Axios.delete(`api/v1/fn/account_transaction/${uuid}`).then(res => res),
    // journals: (data) => Axios.get('api/v1/fn/account_transaction/journals', { params: { data } }).then(res => res)
}


export default Index;