export const SET_EMPLOYEES = "SET_EMPLOYEES"
export const GET_EMPLOYEES = "GET_EMPLOYEES"

/**
 * Actions definition for reducers
 * not using separate action file
 */
export const setEmployees = (employees) => ({
  type: 'SET_EMPLOYEES',
  employees
})

export const getEmployees = () => ({
  type: 'GET_EMPLOYEES'
})

export const addEmployee = () => ({
  type: 'ADD_EMPLOYEE'
})

export const delEmployee = () => ({
  type: 'DEL_EMPLOYEE'
})

export const editEmployee = () => ({
  type: 'EDIT_EMPLOYEE'
})


const initialState = {
  employees: []
}


function EmployeeReducer(state = initialState, action) {

  switch (action.type) {
    case 'SET_EMPLOYEES':
      const { employees } = action
      return {
        ...state,
        employees: employees
      }
    case 'GET_EMPLOYEES':
      return state
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: []
      }
    case 'DEL_EMPLOYEE':
      return {
        ...state,
        employees: []
      }
    case 'EDIT_EMPLOYEE':
      return {
        ...state,
        employees: []
      }
    default:
      return state
  }
}

export default EmployeeReducer