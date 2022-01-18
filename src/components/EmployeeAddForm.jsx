import React from 'react'
import { FormControl, Box, TextField, OutlinedInput, InputLabel, InputAdornment } from '@mui/material'

export default function EmployeeAddForm() {

  // employee list state
  const [employees, setEmployees] = React.useState()

  /**
   * localStorage CRUD Opeartions
   */
  // current active employee item
  const [employee, setEmployee] = React.useState("");

  React.useEffect(() => {

    localStorage.setItem("employees", JSON.stringify(employees));

  }, [employees]);

  function handleInputChange(e) {
    setEmployee(e.target.value);
  }

  // function to create a new object on form submit
  function handleFormSubmit(e) {
    // prevent default behavior onSubmit
    e.preventDefault();

    // don't submit if the input is an empty string
    if (employee !== "") {
      // set the new employees state (the array)
      setEmployees([
        // copy the current values in state
        ...employees,
        {
          // setting a basic id to identify the object
          id: employees.length + 1,
          // set a text property to the value of the employee state and 
          // trim the whitespace from the input
          text: employee.trim()
        }
      ]);
    }

    // clear out the input box
    setEmployee("");
  }

  function handleChangeFirstName() {

  }
  function handleChangeLastName() {

  }
  function handleChangeEmail() {

  }
  function handleChangeNumber() {

  }
  function handleChangeGender() {

  }

  return (
    <FormControl>
      <InputLabel >First Name</InputLabel>
      <OutlinedInput
        id="outlined-firstname"
        type='text'
        value={employee.firstName}
        onChange={handleChangeFirstName}
        label="First Name"
      />

    </FormControl>
  )
}
