import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import Form from './Form/Form';
import ContactsList from './ContactsList/ContactsList';
import { Container } from './App.styled';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const handleSubmit = formData => {
    const { name } = formData;

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === formData.name.toLowerCase()
      )
    ) {
      alert(
        `Contact with name ${name} already exists. Please choose a different name.`
      );
      return;
    }

    const newContact = {
      id: nanoid(),
      ...formData,
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };


  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactsList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </Container>
  );
}
