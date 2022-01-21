import { combineReducers } from "redux";
import EmployeeReducer from './employee.reducer'

const rootReducer = combineReducers({
  // reducers key:value pair ...
  employees: EmployeeReducer
})

export default rootReducer