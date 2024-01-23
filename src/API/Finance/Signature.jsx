import { Axios } from "../../Config";

const Index = {
    show: (uuid) => Axios.get(`/api/v1/com/signature/${uuid}`).then(res => res)
}


export default Index;