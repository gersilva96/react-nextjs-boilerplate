import { AxiosResponse, AxiosError } from 'axios';

export type axiosResponse = {
  success: true;
  statusCode: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
};

export type axiosError = {
  success: false;
  error: {
    message: string;
    code?: number;
    url?: string;
    method?: string;
  };
};

const handleError = (axiosErr: AxiosError): axiosError => {
  let errorResponse: axiosError;
  if (axiosErr.response) {
    const responseError = axiosErr.response;
    errorResponse = {
      success: false,
      error: {
        code: responseError.request.status,
        message: responseError.request.statusText,
        url: responseError.config.url,
        method: responseError.config.method?.toUpperCase(),
      },
    };
  } else {
    errorResponse = {
      success: false,
      error: { message: 'ERR_CONNECTION_REFUSED' },
    };
  }
  return errorResponse;
};

const handleResponse = (axiosRes: AxiosResponse): axiosResponse => {
  const response: axiosResponse = {
    success: true,
    statusCode: axiosRes.status,
    payload: axiosRes.data,
  };
  return response;
};

export default { handleResponse, handleError };
