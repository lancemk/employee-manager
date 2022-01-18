import React from 'react'

// using ag-grid
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const rowData = [
  { make: "Toyota", model: "Celica", price: 35000 },
  { make: "Ford", model: "Mondeo", price: 32000 },
  { make: "Porsche", model: "Boxter", price: 72000 }
];

/**
 * 
 * 
 */
export default function EmployeeList() {

  // employee list state
  const [employees, setEmployees] = React.useState()

  // initial call of employees from 
  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: null,
      redirect: 'follow'
    };

    fetch("https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees", requestOptions)
      .then(response => response.text())
      .then(result => {
        setEmployees(result)
      })
      .catch(error => console.log('error', error));
  }, [])


  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={employees}>
        <AgGridColumn field="first name"></AgGridColumn>
        <AgGridColumn field="last name"></AgGridColumn>
        <AgGridColumn field="email"></AgGridColumn>
        <AgGridColumn field="phone number"></AgGridColumn>
        <AgGridColumn field="gender"></AgGridColumn>
      </AgGridReact>
    </div>
  )
}
