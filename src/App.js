import React from 'react'
import {
  BrowserRouter as Router,
  /**
   * using @v5.2.0
   * Switch not Supported since react-router v6 
   * https://stackoverflow.com/questions/69843615/switch-is-not-exported-from-react-router-dom
   */
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import './App.css'

import EmployeeForm from './components/EmployeeForm'
import EmployeeList from './components/EmployeeList'

const routes = [
  {
    linkTitle: 'Employee List',
    path: '/employee/list',
    component: EmployeeList,
  },
  {
    linkTitle: 'Add Employee',
    path: '/employee/add',
    component: EmployeeForm,
  },
  {
    linkTitle: 'Employee Employee',
    path: '/employee/edit',
    component: EmployeeForm,
  },
]

function App() {

  return (
    <div className='App'>
      <Router>

        <h2 style={{
          flex: 1,
          display: 'block',
          width: '100%'
        }}> List Manager </h2>

        {/* list of route urls supported */}
        <Switch>
          {routes.map((r, i) => (
            <Route key={i}
              exact
              path={r.path}
              component={r.component}
            />
          ))}

          {/* upon reaching root, redirect */}
          <Redirect from="/" to="/employee/list" />
        </Switch>

      </Router>
    </div>
  )
}

export default App
