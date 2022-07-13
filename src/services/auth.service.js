import axios from "axios";
const APP_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
    return axios.post(APP_URL + "signup", {
        username,
        email,
        password
    });
};

const login = (username, password) => {
    return axios.post(APP_URL + "login", {
        username,
        password
    })
        .then((res) => {
            if (res.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(res.data));
            }
            return res.data;
        })
};

const logout = () => {
    localStorage.removeItem("user");
}

export default {
    register,
    login,
    logout
}