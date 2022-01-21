const initialState = []

function EmployeeReducer(state = initialState, action) {

  switch (action.type) {
    case 'SET_EMPLOYEES':
      return action.employees

    case 'GET_EMPLOYEES':
      return state

    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: [...state.employees, action.newEmployee]
      }
    case 'DEL_EMPLOYEE':
      return state.filter(employee => employee.id !== action.id)

    case 'EDIT_EMPLOYEE':
      return state.f(employee => {
        if (employee.id === action.id) {
          employee = action
        }

      })
    default:
      return state
  }
}

export default EmployeeReducer