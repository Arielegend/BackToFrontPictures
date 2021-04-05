const axios = require("axios").default;

/*
Simple get method.
In case GET call is successful, return data and status 1
Otherwise, wee return status 0 and empty array
*/
const GetByUrl = async (url) => {
  let response = await axios.get(url);
  if (response.status == 200) {
    response_to_client = {
      status: 1,
      data: response.data,
    };
    return response_to_client;
  }

  response_to_client = {
    status: 0,
    data: [],
  };
  return response_to_client;
};

module.exports = GetByUrl;
