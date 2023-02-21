import PropTypes from 'prop-types';
import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactsListItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

export const ContactsListItem = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      {contacts.length &&
        contacts.map(contact => (
          <ContactItem key={contact.id}>
            <ContactName>
              {contact.name}:<ContactNumber>{contact.phone}</ContactNumber>
            </ContactName>
            <Button
              type="button"
              onClick={() => handleDeleteContact(contact.id)}
            >
              Delete
            </Button>
          </ContactItem>
        ))}
    </>
  );
};

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape),
};
