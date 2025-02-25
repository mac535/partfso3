import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [persons, setPersons] = useState([]);

  // Fetch data from JSON Server using useEffect
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      {persons.length > 0 ? (
        persons.map((person) => (
          <p key={person.id}>
            {person.name}: {person.number}
          </p>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
