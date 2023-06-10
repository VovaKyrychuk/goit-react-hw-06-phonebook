import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, getAllContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { List } from './ContactList.styled';
import { ListItem } from './ContactList.styled';
import { ListBtn } from './ContactList.styled';

export const ContactList = () => {
  const allContacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <List>
      {allContacts.contacts
        .filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))
        .map(item => {
          return (
            <ListItem key={item.name}>
              <span>
                {item.name}: {item.number}
              </span>

              <ListBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(item.name));
                }}
              >
                Delete contact
              </ListBtn>
            </ListItem>
          );
        })}
    </List>
  );
};
