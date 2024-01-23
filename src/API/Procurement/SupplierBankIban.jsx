import { Axios } from "../../Config";

const Index = {
    list: (data) => Axios.get("api/v1/pro/supplier-bank-iban/list", { params: { data: JSON.stringify(data) } }).then(res => res),
    table: (data) => Axios.get('api/v1/pro/supplier-bank-iban/table', { params: { data } }).then(res => res),
}

export default Index;