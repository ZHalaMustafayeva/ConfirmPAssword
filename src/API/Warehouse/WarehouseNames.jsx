import { Axios } from "../../Config";

const Index = {
    list: (data) => Axios.get("api/v1/wh/warehouse-names/list", { params: { data } }).then(res => res)
}


export default Index;