import { put, call, takeEvery, all } from 'redux-saga/effects'
import { setEmployees, GET_EMPLOYEES } from '../reducers/employee.reducer'
import { GetEmployees } from '../api/employee.api'

function* watcherEmployees() {

  // connect reducer action to the generator
  yield takeEvery(GET_EMPLOYEES, handleGetEmployees)
}

function* handleGetEmployees() {

  // wait for the yeild FUNC finish, then continues
  try {
    const res = yield call(GetEmployees)
    const { data } = res

    // dispatch action and write into redux store
    yield put(setEmployees(data))
  } catch (error) {
    console.log(error)
  }
}


// entry point to start all Sagas
export default function* rootSaga() {
  yield all([
    watcherEmployees()
  ])
}