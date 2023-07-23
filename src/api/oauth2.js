import axios from "axios";
const handleOauth = (response_type, client_id, redirect_uri, scope) => {
  let urlText =
    `oauth2/authorize?response_type=` +
    response_type +
    `&client_id=` +
    client_id +
    `&redirect_uri=` +
    redirect_uri +
    `&scope=${scope}`;
  var config = {
    method: "get",
    maxBodyLength: Infinity,
    url: urlText,

    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };
  // console.log(urlText)
  return axios(config);
};
export { handleOauth };
