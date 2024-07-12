//axios handles the api requests
import axios from 'axios';
import { FETCH_USER } from './types';

//this is an action creator to check where user is signed in or not
//action creator returns an action which is dispatch in this case which contains the user information (NULL OR VALID) 
export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({type: FETCH_USER, payload: res.data});
};

export const handleToken = token => async dispatch => {
    const res = await axios.post('/api/stripe', token);
    dispatch({type: FETCH_USER, payload: res.data});
};

export const submitSurvey = (values, history) => async dispatch => {
    const res = await axios.post('/api/surveys', values);
  
    history.push('/surveys');
    dispatch({ type: FETCH_USER, payload: res.data });
  };
  
  

