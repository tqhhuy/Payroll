import axiosClient from "./axiosClient";

const Authorise = {
    getTokenAuthen:(param) => {
        const url = `/accounts/login?token=${param}`;
        return axiosClient.get(url);
    }
}
export default Authorise;