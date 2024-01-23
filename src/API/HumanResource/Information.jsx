import { Axios } from "../../Config";

const Index = {
    employeList: (data) => Axios.get("api/v1/hr/info/emd-name/list", { params: { ...data } }).then((res) => res)
};

export default Index;
