import axios from "axios";
import { BASE_URL, config } from "./config";

const requestToBackend = (method, data, id) => {
  let url = "";
  let newConfig={...config}
  switch (method) {
    case 'GET':
      newConfig = { ...config, method: "get", url: BASE_URL + "/get-items" };
      break;
    case 'POST':
        newConfig = { ...config, method: "post", url: BASE_URL + "/post-item", data };
      break;
    case 'DELETE':
        newConfig = { ...config, method: "delete", url: BASE_URL + "", id };
      break;
    case 'PUT':
        newConfig = { ...config, method: "put", url: BASE_URL + "", data };
      break;
    default:
      console.log("NO Route Found");
  }

  console.log(newConfig)

  return axios(newConfig);
};

export const getData=async()=>{
    try{
        const res=await requestToBackend('GET');
        return res?.data?.data;
    }
    catch(err){
        console.log(err);
    }

}

export const postData=async(data)=>{
    try{
        const res=await requestToBackend('POST',data);
        return res?.data;
    }
    catch(err){
        console.log(err);
    }
}