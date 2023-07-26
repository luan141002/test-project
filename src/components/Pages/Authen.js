import React from "react";
// import './Nav.css'
import { handleOauth } from "../../api/oauth2";
import { handleToken } from "../../api/token";
import { config } from "../../lib/constants";
class Authentication extends React.Component {
  state = {
    authHtml: "", // Initialize state to store the API response
  };
  async componentDidMount() {
    // Set the API response in the state
    let res = await handleOauth(
      config.REACT_APP_RESPONSE_TYPE,
      config.CLIENT_ID,
      config.REACT_APP_REDIRECT_URL,
      "full"
    );
    console.log("ds", res.data);
    this.setState({
      authHtml: res.data,
    });
    // console.log('ds',this.state.authHtml)
    const urlParams = new URLSearchParams(window.location.search);
    const auth_code = urlParams.get("code");
    console.log("auth code:", auth_code);
    if (auth_code != null) {
      let tokenCode = await handleToken(
        config.REFRESH_TOKEN,
        "authorization_code",
        config.CLIENT_ID,
        config.REACT_APP_CLIENT_SECRET
      );
      console.log(tokenCode.data);
    }
  }
  render() {
    let { authHtml } = this.state;
    return (
      <>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: authHtml }} />
      </>
    );
  }
}

export default Authentication;
