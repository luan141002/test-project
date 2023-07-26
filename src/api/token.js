import axios from "axios";
const handleToken = (refresh_token, grant_type, client_id, client_secret) => {
  var qs = require("qs");
  var data = qs.stringify({
    grant_type: "refresh_token",
    client_id: client_id,
    client_secret: client_secret,
    refresh_token: refresh_token,
  });
  var config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://oauth.hanet.com/token",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  // return axios(config)
  // .then(function (response) {
  //     console.log(JSON.stringify(response.data));
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });
  return axios(config);
};
export { handleToken };
