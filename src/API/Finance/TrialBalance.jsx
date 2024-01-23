import { Axios } from "../../Config";

const Index = {
    index: (data) => Axios.get('api/v1/fn/trial-balance', { params: { data: JSON.stringify(data) } }).then(res => res),
    table: (data) => Axios.get('api/v1/fn/trial-balance/child-data', { params: { data: JSON.stringify(data) } }).then(res => res),
}


export default Index;