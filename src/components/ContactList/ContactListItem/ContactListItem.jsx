import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import actions from 'redux/actions';
import s from './ContactListItem.module.css';

export default function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();
  const onDeleteContact = id => dispatch(actions.deleteContact(id));
  return (
    <li className={s.listItem}>
      <p className={s.text}>
        {name}: {number}
      </p>
      <button
        className={s.itemButton}
        type="button"
        onClick={() => onDeleteContact(id)}
      />
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
