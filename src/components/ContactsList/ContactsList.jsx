import { ContactsListItem } from '../ContactsListItem/ContactsListItem';
import { ContactUl } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { selectContact, selectFilter } from '../../redux/selectors';

const useFilterArray = (array, filter) => {
  return filter
    ? array.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : array;
};

export const ContactsList = () => {
  const { contacts } = useSelector(selectContact);
  const { filter } = useSelector(selectFilter);
  const contactsList = useFilterArray(contacts, filter);

  return (
    <ContactUl>
      <ContactsListItem contacts={contactsList} />
    </ContactUl>
  );
};
