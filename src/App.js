import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  /**
   * using @v5.2.0
   * Switch not Supported since react-router v6 https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
   */
  Switch,
  Route,
} from 'react-router-dom'

import './App.css'
import { Button } from '@mui/material'

import EmployeeAddForm from './components/EmployeeAddForm'
import EmployeeEditForm from './components/EmployeeEditForm'
import EmployeeList from './components/EmployeeList'

import { GetEmployees } from './api/employee.api'

const routes = [
  {
    linkTitle: 'Home Page',
    path: '/employee/list',
    child: EmployeeList,
  },
  {
    linkTitle: 'Add Employee',
    path: '/employee/add',
    child: EmployeeAddForm,
  },
  {
    linkTitle: 'Edit Employee',
    path: '/employee/edit',
    child: EmployeeEditForm,
  },
]

function App({ store }) {

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(GetEmployees())
  }, [dispatch])

  const employees = useSelector(state => state.employees)
  console.log(employees)

  return (
    <div className='App'>
      <Router>

        <h1> Employee Manager </h1>
        <Switch>
          {routes.map((r, i) => (
            <Route key={i}
              exact
              path={r.path}
              children={r.child}
            />
          ))}
        </Switch>

        <Button
          variant='contained'
          onSubmit={() => { }}
        >Submit</Button>
      </Router>
    </div>

  )
}

export default App
