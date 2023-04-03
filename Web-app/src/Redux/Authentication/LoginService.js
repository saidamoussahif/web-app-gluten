import axios from "axios";

// const API_URL = "http://localhost:9090/api/users/login";

const login = async (userData) => {

  const response = await axios.post("http://localhost:9090/api/users/login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("userToken", response.data.token);
    localStorage.setItem("fullname", response.data.fullname);
    localStorage.setItem("id", response.data._id);
    localStorage.setItem("role", response.data.role);

    // console.log(localStorage.getItem("user"))
    console.log(response.data.token)
  }
  return response.data;
};

const LoginService = {
  login,
};

export default LoginService;
