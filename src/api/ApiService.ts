import axios from "axios";

interface Params {
  baseUrl: string;
  headers: any;
  method: string;
}

const postConfig: Params = {
  baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    Authorization: "",
  },
  method: "post",
};

const getConfig: Params = {
  baseUrl: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    Authorization: "",
  },
  method: "get",
};

export const postAPI = async (url: string, data: any): Promise<any> => {
  return await axios({
    ...postConfig,
    url: `${postConfig.baseUrl}/${url}`,
    data,
  })
    .then((response) => {
      window.console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      window.console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};

export const getAPI = async (url: string): Promise<any> => {
  return await axios({
    ...getConfig,
    url: `${getConfig.baseUrl}/${url}`,
  })
    .then((response) => {
      window.console.log(response);
      return {
        status: response.status,
        data: response.data,
      };
    })
    .catch((error) => {
      window.console.log(error);
      return {
        status: error.status,
        data: error.response,
      };
    });
};
