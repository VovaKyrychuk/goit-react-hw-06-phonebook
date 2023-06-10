import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, getAllContacts } from 'redux/contactsSlice';

import { nanoid } from 'nanoid';
import { Form } from './FormContact.styled';
import { FormLabel } from './FormContact.styled';
import { Button } from './FormContact.styled';
import { FormInput } from './FormContact.styled';

export const FormContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const allContacts = useSelector(getAllContacts);
  const dispatch = useDispatch();

  const onSubmit = e => {
    e.preventDefault();
    const names = allContacts.contacts.map(item => item.name);
    if (names.some(item => item.toLowerCase() === name.toLowerCase())) {
      return;
    }
    const id = nanoid();
    dispatch(addContact({ name, number, id }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormLabel htmlFor={name}>
        Name
        <FormInput
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </FormLabel>
      <FormLabel htmlFor={number}>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={e => setNumber(e.target.value)}
        />
      </FormLabel>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

// export default FormContact;
