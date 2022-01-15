import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css'

import EmployeeAddForm from './components/EmployeeAddForm'
import EmployeeEditForm from './components/EmployeeEditForm'

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button onClick={onIncrementAsync}>
      Increment after 1 second
    </button>
    {' '}
    <button onClick={onIncrement}>
      Increment
    </button>
    {' '}
    <button onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </div>
)

const routes = [
  {
    linkTitle: 'Add Employee',
    path: '/employee/add',
    children: <EmployeeAddForm />,
  },
  {
    linkTitle: 'Edit Employee',
    path: '/employee/edit',
    children: <EmployeeEditForm />,
  },
]

const MyRouter = () => {

  return (
    <Router>
      {routes.map(r => (
        <Route path={r.path} children={r.children} />
      ))}
    </Router>
  )
}



function App({ store }) {

  const action = type => store.dispatch({ type })

  const [employees, setEmployees] = React.useState()
  const getEmployees = () => {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: null,
      redirect: 'follow'
    };

    fetch("https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees", requestOptions)
      .then(response => response.text())
      .then(result => {
        setEmployees(result)
      })
      .catch(error => console.log('error', error));

  }

  React.useEffect(() => getEmployees(), [])

  return (
    <div className='App'>
      <h1> Redux Sage Test </h1>
      <Counter
        value={store.getState()}
        onIncrement={() => action('INCREMENT')}
        onDecrement={() => action('DECREMENT')}
        onIncrementAsync={() => action('INCREMENT_ASYNC')}
      />

      {employees && employees.map(a => (
        <div>
          <span>{a.firstName}</span>
          <span>{a.lastName}</span>
          <span>{a.email}</span>
          <span>{a.number}</span>
          <span>{a.gender}</span>
        </div>
      ))}

      {/* <MyRouter></MyRouter> */}
    </div>
  )
}

export default App
