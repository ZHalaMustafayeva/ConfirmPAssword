import { Axios } from "../../Config";

const Index = {
    list: (data) => Axios.get("api/v1/wh/item-unit/list", { params: { data } }).then(res => res)
}


export default Index;