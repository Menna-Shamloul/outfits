import axios from "axios";

axios.defaults.baseURL = 'https://outfit-backend-797953668660.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;