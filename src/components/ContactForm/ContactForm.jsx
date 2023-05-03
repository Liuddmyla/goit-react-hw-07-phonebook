import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { addContact } from '../../redux/operations';
import css from './ContactForm.module.css'
import { selectContacts } from 'redux/selectors';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const dispatch = useDispatch();  
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
      reset();
    }
   
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div >
      <h1 className={css.title}>Phonebook</h1>
      
      <form onSubmit={handleSubmit} className={css.form}>
        <div className={css['item-form']}>
          <label htmlFor="name" className={css['label-form']}>Name</label>
          <input
          type="text"
          name="name"          
          value={name}          
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
          className={css['input-form']}
          />
        </div>
       
        <div className={css['item-form']}>
          <label htmlFor="number" className={css['label-form']}>Number</label>
          <input
          type="tel"
          name="number"
          value={number}         
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
          className={css['input-form']}
          />   
        </div>        
        
        <button type="submit" className={css['btn-form']}>Add contact</button>
        <br />
      </form>
    </div>
  );
};


export default ContactForm;