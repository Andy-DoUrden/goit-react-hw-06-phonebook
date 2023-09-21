import { Container, PhonebookContainer, Title, ListTitle } from './App.styled';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';

export default function App() {
  return (
    <Container>
      <PhonebookContainer>
        <Title>Phonebook</Title>

        <ContactForm />

        <ListTitle>Contacts</ListTitle>

        <Filter />

        <ContactList />
      </PhonebookContainer>
    </Container>
  );
}
