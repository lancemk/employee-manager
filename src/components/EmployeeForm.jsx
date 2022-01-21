import React from 'react'
import {
  FormControl,
  FormLabel,
  Box,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button
} from '@mui/material'
import {
  useHistory,
  useLocation
} from 'react-router-dom'
import ConfirmationDialog from './ConfirmationDialog'
import { useSelector } from 'react-redux'

export default function EmployeeForm() {

  const history = useHistory()
  const location = useLocation();

  // current active personal details item
  const [details, setEmployee] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    number: null,
    gender: null, // "male" | "female"
    id: 1
  });

  const [fnError, setFnError] = React.useState(null) // firstname validate error
  const [lnError, setLnError] = React.useState(null) // lirstname validate error
  const [emError, setEmError] = React.useState(null) // email validate error
  const [phError, setPhError] = React.useState(null) // phone number validate error

  function handleChangeFirstName(e) {
    setEmployee({ ...details, firstName: e.target.value })
  }

  function handleChangeLastName(e) {
    setEmployee({ ...details, lastName: e.target.value })
  }

  function handleChangeEmail(e) {
    setEmployee({ ...details, email: e.target.value })
  }

  function handleChangeNumber(e) {
    setEmployee({ ...details, number: e.target.value })
  }

  function handleChangeGender(e) {
    setEmployee({ ...details, gender: e.target.value })
  }

  const [isOpen, setDialogOpen] = React.useState(false)

  function handleAddFormSubmit(e) {

    // prevent default behavior onSubmit
    e.preventDefault();

    // min 6 max 10 char
    if (details.firstName.length < 6 || details.firstName.length > 10) {
      setFnError('String must be within 6 to 10 characters')
    } else {
      setFnError(null)
    }

    // min 6 max 10 char
    if (details.lastName.length < 6 || details.lastName.length > 10) {
      setLnError('String must be within 6 to 10 characters')
    } else {
      setLnError(null)
    }

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(details.email)) {
      setEmError('Email format is not correct')
    } else {
      setEmError(null)
    }

    if (!typeof (details.number)) {
      setPhError('Only numbers in the field')
    }
    // validate SG phone number format, 8-digits
    if (details.number.length !== 8) {
      setPhError('Is not correct SG Mobile format')
    }
    else {
      setPhError(null)
    }

    // if (!fnError && !lnError && !emError && !phError) {
    //   // confirmation popup onClick Submit Button
    //   setDialogOpen(true)
    // }

    if (fnError && lnError && emError && phError) {

    } else {
      setDialogOpen(true)

    }
  }

  const employee = useSelector(state => state.employees.find(el => {
    return el.email === details.email
  }))

  console.log('redux store found employee', employee);

  function handleEditFormSubmit() {

  }

  // Confirmation Dialog Handler   
  function handleOk() {

    if (!fnError && !lnError && !emError && !phError) {
      /*
      * MockUp CRUD Write to Database 
      */
      localStorage.setItem("employee", JSON.stringify(details));
    }

    setTimeout(() => {
      setDialogOpen(false)
      history.push('/employee/list')
    }, 2000)

  }


  return (

    <Box
      component="form"
      style={{
        verticalAlign: 'middle',
        padding: 9,
        border: '1px solid green'
      }}
      // styles on all children TextField
      sx={{
        '& .MuiTextField-root': {
          m: 1.2, width: '30ch',
        },
      }}
      noValidate
      autoComplete=''
    >
      <h2>
        {location.pathname === '/employee/edit' ? 'Edit Employee'
          : location.pathname === '/employee/add' ? 'Add Employee'
            : null}
      </h2>

      <div>
        <TextField
          error={fnError !== null ? true : false}
          id="filled-error"
          label="First Name"
          value={details.firstName}
          onChange={handleChangeFirstName}
          helperText={fnError !== null ? fnError : null}
        />
        <TextField
          error={lnError !== null ? true : false}
          id="filled-error"
          label="Last Name"
          value={details.lastName}
          onChange={handleChangeLastName}
          helperText={lnError !== null ? lnError : null}
        />
      </div>

      <div>
        <TextField
          error={emError !== null ? true : false}
          id="filled-error"
          label="Email"
          type="email"
          value={details.email}
          onChange={handleChangeEmail}
          helperText={emError !== null ? emError : null}
        />
        <TextField
          error={phError !== null ? true : false}
          id="filled-error"
          label="Phone Number"
          value={details.number}
          onChange={handleChangeNumber}
          helperText={phError !== null ? phError : null}
        />
      </div>

      <div style={{
        margin: '20px 0 0 0'
      }}>
        <FormControl>
          <FormLabel style={{ fontSize: 20 }}>Gender</FormLabel>
          <RadioGroup
            row
            name="gender-group"
            value={details.gender}
            onChange={handleChangeGender}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </div>

      <div style={{ textAlign: 'end' }}>
        <div style={{ flex: 1, display: 'inline-block' }}>
          <Button
            style={{
              margin: 10, padding: 6, width: 87,
            }}
            variant='contained'
            onClick={() => {
              history.push('/employee/list')
            }}
          > Back </Button>
        </div>

        <div style={{ flex: 1, display: 'inline-block' }}>
          <Button
            style={{
              margin: 10, padding: 6, width: 87,
              // inherited relative position difference
              // from center 
              // top: '15%', left: '30%'
            }}
            variant='contained'
            onClick={e => {

              if (location.pathname === '/employee/add') {
                handleAddFormSubmit(e)
              }
              if (location.pathname === '/employee/edit') {
                handleEditFormSubmit(e)
              }

            }}
          > Submit </Button>
        </div>
      </div>

      <ConfirmationDialog
        onOk={() => handleOk()}
        onCancel={() => setDialogOpen(false)}
        open={isOpen}
        value={1}

        title={'Employee Insert'}
        body={'Form information checked. Confirm submission?'}
      />

    </Box>
  )
}
