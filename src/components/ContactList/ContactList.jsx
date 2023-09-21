import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';

import { List } from './ContactList.styled';

import ContactItem from './ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useSelector(getContacts).items;
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizedFilterValue = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterValue)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
            deleteContact={() => dispatch(deleteContact(id))}
          />
        );
      })}
    </List>
  );
};

export default ContactList;
