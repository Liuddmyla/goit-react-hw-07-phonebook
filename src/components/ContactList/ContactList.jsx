import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import css from './ContactList.module.css';
import { selectContacts, selectFilter } from 'redux/selectors';


const ContactList = ({ children }) => {
  const filtersContacts = (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const contacts = useSelector(selectContacts); 
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  const deleteItem = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div >
        <h2 className={css.title}>Contacts</h2>
        {children}
        <ul className={css.list}>
          {contactsList.map(({ name, number, id }) => (
            <li key={id} className={css.item}>
              <p>{name}: {number} </p>
              <button type="button" onClick={() => deleteItem(id)} className={css['btn-delete']}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContactList;