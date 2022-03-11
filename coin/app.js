const request = require('request')
const {v4: uuidv4} = require('uuid')
const sign = require('jsonwebtoken').sign
const queryEncode = require("querystring").encode


const access_key = 'xmlJA4fDzIKroOLqR0ZxWVxAYm9qikTzEcOBS2Fr';
const secret_key = 'JIbjKQDz23MVkMpVTVTp88zaPXQr5boSVxrWJZ1b'; //114.201.115.9
const server_url = 'https://api.upbit.com';



payload = {access_key: access_key, nonce: uuidv4()}
const token = sign(payload, secret_key)





//게좌 잔고 조회
const balance = {
    method: "GET",
    url: server_url + "/v1/accounts",
    headers: {Authorization: `Bearer ${token}`},
}

request(balance, (error, response, body) => {
    if (error) throw new Error(error)
    console.log(body)
})

//
const coinList = {method: 'GET', headers: {Accept: 'application/json'}};

const fetch1 = fetch();

fetch1('https://api.upbit.com/v1/market/all?isDetails=true', coinList)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
