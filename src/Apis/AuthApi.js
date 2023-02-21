import axiosClients from "../axiosClient";

export const apiLogin = {
    post: (data) => {
      const url = "/auth/login";
      return axiosClients.post(url, data);
    },
  };
  
  export const apiRegister = {
    post: (data) => {
      const url = "/auth/signup";
      return axiosClients.post(url, data);
    },
  };