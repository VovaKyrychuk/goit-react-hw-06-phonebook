import { useSelector } from 'react-redux';
import { getAllContacts } from 'redux/contactsSlice';

import { GlobalStyle } from './GlobalStyle';
import { FormContact } from './FormContact/FormContact';
import { ContactList } from './ContactList/ContactList';
import { Layout } from './Layout/Layout';
import Filter from './Filter/Filter';

// const App = () => {
//   const [contacts, setContacts] = useState([]);
//   const [filter, setFilter] = useState('');

export function App() {
  const allContacts = useSelector(getAllContacts);

  return (
    <Layout>
      <div>
        <h1>Phonebook</h1>
        <FormContact />
        <h2>Contacts</h2>
        <Filter />
        {allContacts.contacts.length > 0 ? (
          <ContactList />
        ) : (
          <p style={{ textAlign: 'center' }}>You don't have any contacts yet</p>
        )}
      </div>
      <GlobalStyle />
    </Layout>
  );
}

export default App;
