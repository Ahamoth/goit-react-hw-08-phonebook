import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signUpUserAPI = user => {
  return axios.post('/users/signup', user).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

export const logInUserAPI = user => {
  return axios.post('/users/login', user).then(({ data }) => {
    token.set(data.token);
    return data;
  });
};

export const logOutUserAPI = () => {
  return axios.post('/users/logout').then(({ data }) => {
    token.unset();
    return data;
  });
};


export const getCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactApi = contact => {
  return axios.post('/contacts', contact).then(({ data }) => {
    return data;
  });
};

export const getContactsApi = () => {
  return axios.get('/contacts').then(({ data }) => {
    return data;
  });
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`).then(({ data }) => {
    return data;
  });
};