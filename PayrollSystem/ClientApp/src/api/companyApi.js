import axiosClient from "./axiosClient";

const CompanyApi = {
    getAll:(param) => {
        const url = `/companies/find/${param}`;
        return axiosClient.get(url);
    }
}
export default CompanyApi;