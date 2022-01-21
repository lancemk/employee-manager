/**
 * actions with for redux-saga watcher
 */
export const SET_EMPLOYEES = "SET_EMPLOYEES"
export const GET_EMPLOYEES = "GET_EMPLOYEES"

export const setEmployees = (employees) => ({
  type: SET_EMPLOYEES,
  employees
})

export const getEmployees = () => ({
  type: 'GET_EMPLOYEES'
})

/**
 * user actions directly dispatch on redux store
 */
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE'
export const addEmployee = (employee) => ({
  type: ADD_EMPLOYEE,
  employee
})

export const delEmployee = () => ({
  type: 'DEL_EMPLOYEE'
})

export const editEmployee = () => ({
  type: 'EDIT_EMPLOYEE'
})
