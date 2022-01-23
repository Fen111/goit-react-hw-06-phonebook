import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import ContactListItem from 'components/ContactList/ContactListItem';
import s from './ContactList.module.css';
import { getVisibleContacts } from 'redux/selectors';
import actions from 'redux/actions';

export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.listItem} key={id}>
          <ContactListItem
            name={name}
            number={number}
            id={id}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};
