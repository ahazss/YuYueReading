import axios from 'axios'
import qs from 'qs'

const server = "http://49.234.81.69:8081"

const GET = 'GET'
const POST = 'POST'

export default {
    request,
    getAuthority,
}

async function request(method, url, data) {
    try {
      const token = window.localStorage.token
      const headers = token ? {
        Authorization: `Bearer ${token}`
      } : {}
      console.log('headers:',headers)
      if (!url.match(/^http|\/\//g)) {
        url = server + url
      }
      console.log(method);
      console.log(url);
      console.log(token);
      console.log(data);
      const res = await axios({
        method: method,
        url: url,
        data: qs.stringify(data),
        headers: headers
      })
      console.log(res);
      if (res.status < 400) {
        return res;
      } else {
        throw ({
          message: res.statusText
        })
      }
    } catch (err) {
      console.log("err")
      console.log(err)
  
      Message({
        message: err.message,
        type: 'error',
        duration: 1000
      });
    }
}

async function getAuthority(form) {
    const res = await request(POST, '/api/users/login', form)
    return res.data
  }