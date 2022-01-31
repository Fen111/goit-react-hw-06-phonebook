import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ContactListItem from 'components/ContactList/ContactListItem';
import s from './ContactList.module.css';
import { getVisibleContacts } from 'redux/selectors';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);

  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem key={id} name={name} number={number} id={id} />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
