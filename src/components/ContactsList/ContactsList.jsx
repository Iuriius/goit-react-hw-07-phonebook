import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactUl } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';

export const ContactsList = () => {
  const contactsList = useSelector(selectVisibleContacts);

  return (
    <ContactUl>
      <ContactsListItem contacts={contactsList} />
    </ContactUl>
  );
};
