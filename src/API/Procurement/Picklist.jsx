import { Axios } from "../../Config";

const Index = {
    distribution: (data) => Axios.get("api/v1/pro/picklist/distribution/list", { params: { data } }).then(res => res),
    list: (data) => Axios.get("api/v1/pro/picklist/prf-pl-addition-expences-type/list", { params: { data } }).then(res => res),
    // contractPredmentList: (data) => Axios.get("api/v1/pro/picklist/contract_predment/list", { params: { data } }).then(res => res),
    // contractPredmentStore: (data) =>  Axios.post("api/v1/pro/picklist/contract_predment", data).then(res => res),
    contractPayment: (data) => Axios.get("api/v1/pro/picklist/contract_payment/list", { params: { data } }).then(res => res),
    contractType: (data) => Axios.get("api/v1/pro/picklist/contract_type/list", { params: { data } }).then(res => res),
    deliveryCondination: (data) => Axios.get("api/v1/pro/picklist/delivery_condition/list", { params: { data } }).then((res) => res),
    supplierGroupName: (data) => Axios.get("api/v1/pro/picklist/supplier-group-name/list", { params: { data } }).then((res) => res),
    supplierContactType: (data) => Axios.get("api/v1/pro/picklist/supplier-contact-type/list", { params: { data } }).then((res) => res),
    supplierActivityCategory: (data) => Axios.get("api/v1/pro/picklist/supplier-activity-type/list", { params: { data } }).then((res) => res),
    documentType: (data) => Axios.get("api/v1/pro/picklist/document-type/list", { params: { data } }).then((res) => res),
    additionExpences: (data) => Axios.get("api/v1/pro/picklist/prf-pl-addition-expences-type/list", { params: { data } }).then((res) => res),
}


export default Index;