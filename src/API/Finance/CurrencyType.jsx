import { Axios } from "../../Config";

const Index = {
    list: (data) =>  Axios.get("api/v1/fn/picklist/currency_type/list", { params: { data } }).then(res => res)
}


export default Index;