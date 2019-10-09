import axios from 'axios';

const setAuthToken = token => {
  if (token) {
    // Apply to every request
    axios.defaults.headers.common['auth-token'] = token;
  } else {
    // Delete auth header
    delete axios.defaults.headers.common['auth-token'];
  }
};

export default setAuthToken;
