import { httpDto, responseError } from "../dto/standar";

const headers = { "Content-Type": "application/json" };

const tokenValidate = (token) => {
  token
    ? (headers.Authorization = `Bearer ${token}`)
    : (headers.Authorization = {});
};

const get = async (endpoint = "", config = {}, token = undefined) => {
  tokenValidate();
  try {
    const response = await fetch(endpoint, {
      method: "GET",
      ...config,
      headers: {
        ...headers,
      },
    });
    return await httpDto(response);
  } catch (error) {
    return responseError;
  }
};

const post = async (endpoint = "", body, config = {}, token) => {
  tokenValidate();
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      ...config,
      headers: {
        ...headers,
      },
      body: JSON.stringify(body),
    });
    return await httpDto(response);
  } catch (error) {
    return responseError;
  }
};

export const http = {
  get,
  post,
};
