import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contact.contacts.items;
export const getContactsFilter = state => state.contact.filter;
export const getIsLoading = state => state.contact.contacts.isLoading;
export const getError = state => state.contact.contacts.error === null;
export const getIsContactsEmpty = state => getContacts(state).length === 0;

export const getFilteredContacts = createSelector(
  [getContacts, getContactsFilter],
  (contacts, filter) => {
    if (filter === '') return contacts;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);