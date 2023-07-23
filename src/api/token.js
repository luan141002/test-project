import axios from "axios";
const handleToken = (code, redirect_uri, grant_type, client_id, client_secret) =>{
    let urlText = `token?code=`+ code +`&grant_type=`+grant_type+`&client_secret=`+client_secret+`&client_id=`+client_id+`&redirect_uri=`+ redirect_uri;
    var config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: urlText,
    
    headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        'Accept': 'application/json',
        }
    };
    // console.log('<<', code,"< >",redirect_uri,"< > ",grant_type,"< >",client_id,"<  sec >",client_secret,"<e end>")
    return axios(config)
    // .then(function (response) {
    //     console.log(JSON.stringify(response.data));
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

}
export{handleToken}
