import { Axios } from "../../Config";

const Index = {
    list: (data) => Axios.get("api/v1/hr/com/city/list", { params: { ...data } }).then(res => res)
}


export default Index;