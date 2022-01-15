
const initialState: Employee[] = []

function EmployeeReducer(state = initialState, action: any) {

  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return []

    default:
      return state
  }
}

export default EmployeeReducer