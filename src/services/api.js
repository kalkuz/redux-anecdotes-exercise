import axios from 'axios';

const baseUrl = 'http://localhost:3001';

const get = (endpoint) => axios.get(baseUrl + endpoint)
  .then((data) => data)
  .catch((err) => console.log(err));

const post = (endpoint, body) => axios.post(baseUrl + endpoint, body)
  .then((data) => data)
  .catch((err) => console.log(err));

const put = (endpoint, body) => axios.put(baseUrl + endpoint, body)
  .then((data) => data)
  .catch((err) => console.log(err));

export { get, post, put };
