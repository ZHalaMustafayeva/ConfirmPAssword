import { Axios } from "../../Config";

const Index = {
    list: (params) => Axios.get("api/general/calendar/list", { params: params }).then(res => res),
}


export default Index;