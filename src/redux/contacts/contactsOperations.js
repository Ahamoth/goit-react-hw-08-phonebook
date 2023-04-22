import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from 'service/connectionsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkAPI) => {
    try {
      const data = await getContactsApi();
      return data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (contact, thunkAPI) => {
    try {
      const data = await addContactApi(contact);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      const dataId = await removeContactApi(id);
      return dataId.id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);