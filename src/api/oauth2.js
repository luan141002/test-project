import axios from "axios";
const handleOauth = (response_type, client_id, redirect_uri, scope) => {
  // var axios = require("axios");

  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://oauth.hanet.com/oauth2/authorize?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`,
    headers: {},
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

  // console.log(urlText)
  return axios(config);
};
export { handleOauth };
