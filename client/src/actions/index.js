//axios handles the api requests
import axios from 'axios';
import { FETCH_USER } from './types';

//this is an action creater to check where user is signed in or not
export const fetchUser = () => {
  return function(dispatch) {
    axios
      .get('/api/current_user')
      .then(res => dispatch({type: FETCH_USER, payload: res}));
  };

};