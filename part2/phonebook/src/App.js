import { useState } from 'react'



const Person = ({ person }) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}


const Filter = ({ value }) => {

  const handleFilterChange = (event) => {    
    value.set(event.target.value)  
  }

  return (
    <div>Filter show: <input value={value.value} onChange={handleFilterChange} /></div>
  )
}

const PhoneBook = ({people}) => {
  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {people.map(person => 
          <Person key={person.id} person={person}></Person>
        )}
      </ul>
    </div>
  )
}

const AddPerson = ({name, number, submit}) => {

  const handleNameChange = (event) => {    
    name.set(event.target.value)  
  }

  const handleNumberChange = (event) => {    
    number.set(event.target.value)  
  }

  return (
    <div>
      <h3>Add New</h3>
      <form  onSubmit={submit}> 
          <div>name: <input value={name.value} onChange={handleNameChange} /></div>
          <div>number: <input value={number.value} onChange={handleNumberChange} /></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [nameFilter, setNameFilter] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const peopleToShow = nameFilter === '' ? persons : persons.filter(person => person.name.toLowerCase().includes(nameFilter.toLowerCase()))

  const addName = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    }

    const elem = persons.find(e => e.name === newName)
    if (elem !== undefined) {
      alert(`{newName} is already added to the phonebook`)
    } else {
      setPersons(persons.concat(person))
    }
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={{value: nameFilter, set: setNameFilter}}></Filter>
      <AddPerson number={{value: newNumber, set: setNewNumber}} name={{value: newName, set: setNewName}} submit={addName}></AddPerson>
      <PhoneBook people={peopleToShow}></PhoneBook>
    </div>
  )
}

export default App 