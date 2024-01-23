import { Axios } from "../../Config";

const Index = {
    CompanyFounder: {
        list: (data) => Axios.get("api/v1/fn/companies/founder/list", { params: { data: JSON.stringify(data) } }).then(res => res),
    },
    Organization: {
        index: (data) => Axios.get("api/v1/fn/companies/organization", { params: { data } }).then((res) => res),
        activity: (data) => Axios.patch(`api/v1/fn/companies/organization/activity`, data).then((res) => res),
        store: (data) => Axios.post("api/v1/fn/companies/organization", data).then((res) => res),
        update: (uuid, data) => Axios.put(`api/v1/fn/companies/organization/${uuid}`, data).then((res) => res),
        show: (uuid) => Axios.get(`api/v1/fn/companies/organization/${uuid}`).then((res) => res),
        update: (uuid, data) => Axios.put(`api/v1/fn/companies/organization/${uuid}`, data).then(res => res),
        position: (data) => Axios.get("api/v1/fn/companies/organization/position", { params: { data: JSON.stringify(data) } }).then(res => res),
        director: (data) => Axios.get('/api/v1/fn/companies/organization/director', { params: { ...data } }).then(res => res),
        delete: (data) => Axios.put(`api/v1/fn/companies/organization/delete`, data).then((res) => res),
    },
}


export default Index;