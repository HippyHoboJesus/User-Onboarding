import './App.css';
import React, { useState } from 'react';
import axios from 'axios';

import formSchema from './validation/formSchema';
import * as yup from 'yup';
import Form from './components/form';

const intFormVals = {
  name: '',
  email: '',
  password:'',
  tos:false
}

const intFormErrs = {
  name: '',
  email: '',
  password:'',
  tos:''
}


function App() {
  const [formValues, setFormValues] = useState(intFormVals)
  const [formErrors, setFormErrors] = useState(intFormErrs)
  const [users, setUsers] = useState([])

  const handleChange = (name, value) => {
    validate(name, value)
    setFormValues({...formValues, [name]: value})
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]})) 
  }

  const handleSubmit = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setUsers([res.data, ...users])
      setFormValues(intFormVals)
    })
    .catch(err => console.error(err))
  }
  return (
    <div className="App">
      <Form 
      values={formValues} 
      change={handleChange} 
      errors={formErrors} 
      submit={handleSubmit}
      />
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </div>
))}
    </div>
  );
}

export default App;
