const axios = require("axios").default;

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

/*
since photos url brings back {}
*/
function MakeFinalResponse() {
  return [];
}
module.exports = GetByUrl;
