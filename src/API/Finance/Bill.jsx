import { Axios } from "../../Config";

const Index = {
    contracts: (data) => Axios.get('api/v1/fn/bill/contracts', { params: { data } }).then(res => res),
    receivingAccount: (data) => Axios.get('api/v1/fn/bill/receiving_account', { params: { data } }).then(res => res),
    journals: (data) => Axios.get('api/v1/fn/bill/journals', { params: { data } }).then(res => res),
    getPRF: (data) => Axios.get('api/v1/fn/bill/prf', { params: { data } }).then(res => res),
    prfSelectedProducts: (data) => Axios.post('api/v1/fn/bill/selected-products', { ...data }).then(res => res),
    prfFragmentedProducts: (data) => Axios.post('api/v1/fn/bill/fragmented-products', { ...data }).then(res => res),
    warehouseProductCategory: (data) => Axios.get('api/v1/fn/bill/product-category', { ...data }).then(res => res),
    store: (data) => Axios.post('api/v1/fn/bills', data).then(res => res),
    eTaxesMerging: (data) => Axios.post('api/v1/fn/bill/etaxes', data).then(res => res),
    eTaxesShow: (uuid) => Axios.get(`api/v1/fn/bill/etaxes/${uuid}`).then(res => res),
    eTaxesDelete: (uuid) => Axios.delete(`api/v1/fn/bill/etaxes/${uuid}`).then(res => res),
    additionExpensesDelete: (data) => Axios.delete('api/v1/fn/bill/activity', { data: JSON.stringify(data) }).then(res => res),
    deleteNewProduct: (uuid) => Axios.delete(`api/v1/fn/bill/new-item/${uuid}`).then(res => res),
    index: (data) => Axios.get('api/v1/fn/bills', { params: { data } }).then(res => res),
    show: (uuid) => Axios.get(`api/v1/fn/bills/${uuid}`).then(res => res),
    update: (uuid, data) => Axios.put(`api/v1/fn/bills/${uuid}`, data).then(res => res),
    getPRFExpenses: (data) => Axios.get('api/v1/fn/bill/addition-expenses', { params: { data } }).then(res => res)
    // activity: (data) =>  Axios.patch(`api/v1/fn/bills/activity`, data).then(res => res),
}
export default Index;