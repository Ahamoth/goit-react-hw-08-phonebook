import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, removeContact } from './contactsOperations';

const pending = state => {
  state.contacts.isLoading = true;
};
const rejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(addContact.pending, pending)
      .addCase(addContact.rejected, rejected)
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.rejected, rejected)
      .addCase(removeContact.pending, pending)
      .addCase(removeContact.rejected, rejected)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items.unshift(payload);
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = payload;
      })
      .addCase(removeContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload
        );
      }),
});

export const { changeFilter } = contactSlice.actions;

export default contactSlice.reducer;
