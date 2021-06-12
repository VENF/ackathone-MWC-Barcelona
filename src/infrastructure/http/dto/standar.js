export const httpDto = async (response) => {
  const STATUS_RESPONSE = {
    404: {
      msg: !response.ok ? JSON.parse(await response.text()) : "",
      status: 404,
      data: "",
    },
    401: {
      msg: "logout",
      status: 401,
      data: "",
    },
    200: {
      msg: "ok",
      status: 200,
      data: response.ok ? await response.json() : "",
    },
  };
  const STATUS_RESPONSE_DEFAULT = 200;
  const result =
    (await STATUS_RESPONSE[response.status]) || STATUS_RESPONSE_DEFAULT;
  return result;
};

export const responseError = {
  msg: "Unexpected error, please try again later",
  data: "",
  status: 500,
};
