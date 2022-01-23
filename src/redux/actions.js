import { createAction } from '@reduxjs/toolkit';

const addContact = createAction('contacts/add', ({ name, number, id }) => ({
  payload: {
    name,
    number,
    id,
  },
}));

const deleteContact = createAction('contacts/delete');
const changeFilter = createAction('contacts/changeFilter');

const actions = { addContact, deleteContact, changeFilter };

export default actions;
