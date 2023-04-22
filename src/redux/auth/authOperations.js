import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  logInUserAPI,
  signUpUserAPI,
  logOutUserAPI,
} from 'service/connectionsAPI';

export const logInUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const data = await logInUserAPI(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const data = await signUpUserAPI(user);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const data = await logOutUserAPI();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
