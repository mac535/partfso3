import { useState, useEffect } from "react";
import phonebookService from "./services/phonebook";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  // Fetch contacts from JSON Server
  useEffect(() => {
    phonebookService.getAll().then((initialContacts) => setPersons(initialContacts));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    phonebookService.create(newPerson).then((returnedPerson) => {
      setPersons(persons.concat(returnedPerson));
      setNewName("");
      setNewNumber("");
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={persons} />
    </div>
  );
};

export default App;
