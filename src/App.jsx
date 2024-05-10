import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm"
import listNumbers from "./numbers.json";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";


export default function App() {
  const [phones, setPhone] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : listNumbers;
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(phones));
  }, [phones]);
  
const [filter, setFilter] = useState('');

const addContact = (newPhone) => {
  setPhone((prevPhone) => {
    return [...prevPhone, newPhone];
  });
};

const visiblePhone = phones.filter((phone) =>
    phone.name.toLowerCase().includes(filter.toLowerCase()) || 
    phone.number.toLowerCase().includes(filter.toLowerCase())
);
  
const deletePhone = (phoneId) => {
    setPhone((prevPhone) => {
      return prevPhone.filter((phone) => phone.id !== phoneId);
    });
};

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList phones={visiblePhone} onDelete={deletePhone}/>
    </>
  )
}

