import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContact = createAction('contacts/add', payload => ({
  payload: {
    ...payload,
    id: nanoid(),
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
