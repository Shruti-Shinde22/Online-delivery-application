import axios from 'axios';

export const setLoadingInterceptor = ({ showLoading, hideLoading }) => {
  axios.interceptors.request.use(
    req => {
      if (!(req.data instanceof FormData)) showLoading();
      return req;
    },
    error => {
      hideLoading();
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    res => {
      hideLoading();
      return res;
    },
    error => {
      hideLoading();
      return Promise.reject(error);
    }
  );
};

//interceptor listen to the req going to the server and res coming from the server
export default setLoadingInterceptor;
