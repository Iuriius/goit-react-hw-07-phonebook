import { Section, Title } from './App.styled';
import { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <Toaster />
      </div>
      <Section>
        <Title>Phonebook</Title>
        <Form />
      </Section>
      <Section>
        {isLoading && !error && <b>Please wait...</b>}
        <>
          <Title>Contacts</Title>
          <Filter />
          <ContactsList />
        </>
      </Section>
    </>
  );
};
