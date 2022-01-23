export const getItems = ({ items }) => items;
export const getFilter = ({ filter }) => filter;

export const getVisibleContacts = ({ items, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  return items.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
