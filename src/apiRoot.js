const DEV_ROOT = 'http://localhost:3000/';
const PROD_URL = 'https://ntkr-be.herokuapp.com/';
const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;

export default API_ROOT