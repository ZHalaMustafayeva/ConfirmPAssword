import { Axios } from "../../Config";

const Index = {
    Status: {
        list: (params) => Axios.get("api/general/pl/status/list", { params: { params } }).then(res => res),
    }
}


export default Index;