import axiosClient from "./axiosClient";;

const  userApi = {
  login: (user)=>{
    const url ='/Auth/login';
    return axiosClient.post(url, user );
  },
  register: (user)=>{
    const url ="Auth/register";
    return axiosClient.post(url,user)
  }
}

export default userApi;