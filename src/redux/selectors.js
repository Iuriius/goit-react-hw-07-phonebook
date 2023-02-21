import { createSelector } from '@reduxjs/toolkit';

export const selectContact = state => state.contacts.items;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectVisibleContacts = createSelector(
  [selectContact, selectFilter],
  (users, filter) => {
    return filter
      ? users.filter(item =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
      : users;
  }
);
