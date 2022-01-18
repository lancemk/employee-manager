import { combineReducers } from "redux";
import EmployeeReducer from './employee.reducer'

const rootReducer = combineReducers({
  // reducers key:value pair ...
  employee: EmployeeReducer
})

export default rootReducer