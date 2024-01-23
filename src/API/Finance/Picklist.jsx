import { Axios } from "../../Config";

const Index = {
    getCurrencyList: (currency) => Axios.get("api/v1/fn/picklist/currency_type/list", { params: { currency } }).then(res => res),
    registrationTypeList: (data) => Axios.get("api/v1/fn/picklist/registration-type/list", { params: { data } }).then(res => res),
    time: (data) => Axios.get("api/v1/fn/picklist/time/list", { params: { data } }).then(res => res),
    tax: (data) => Axios.get("api/v1/fn/picklist/tax/list", { params: { data } }).then(res => res),
    AccountType: {
        list: (data) => Axios.get("api/v1/fn/picklist/account_type/list", { params: { data } }).then(res => res)
    },
    CompaniesBranch: {
        list: (data) => Axios.get("api/v1/fn/picklist/companies_branch_name/list", { params: { data: JSON.stringify(data) } }).then(res => res),
        store: (data) => Axios.post("api/v1/fn/picklist/companies_branch_name", data).then((res) => res),
    },
    CompanyBankIban: {
        list: (data) => Axios.get("api/v1/fn/company-bank-iban/list", { params: { data: JSON.stringify(data) } }).then(res => res)
    },
    CompaniesMethodUtilization: {
        list: (data) => Axios.get("api/v1/fn/picklist/comp_method_utilization/list", { params: { data: JSON.stringify(data) } }).then((res) => res),
    },
    CompaniesMethodCalculations: {
        list: (data) => Axios.get("api/v1/fn/picklist/comp_method_calculation/list", { params: { data: JSON.stringify(data) } }).then((res) => res),
    },
    institutionType: {
        list: (data) => Axios.get("api/v1/fn/picklist/institution-type/list", { params: { data: JSON.stringify(data) } }).then((res) => res),
    },
    registryType: {
        list: (data) => Axios.get("api/v1/fn/picklist/registry-type/list", { params: { data: JSON.stringify(data) } }).then((res) => res),
    },
    destinationType: {
        list: (data) => Axios.get("api/v1/fn/picklist/destination-type/list", { params: { data: JSON.stringify(data) } }).then((res) => res),
    },
    activeType: {
        list: (data) => Axios.get("api/v1/fn/picklist/activity-type/list", { params: { data: JSON.stringify(data) } }).then((res) => res),
    },
    currencyType: {
        list: (data) => Axios.get("api/v1/fn/picklist/currency_type/list", { params: { data: JSON.stringify(data) } }).then((res) => res),
    },
    etiquet: {
        list: (data) => Axios.get("api/v1/fn/picklist/etiquette/list", { params: { data } }).then((res) => res),
    },
}

export default Index;