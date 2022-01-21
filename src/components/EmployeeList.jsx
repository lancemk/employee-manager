import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

import {
  Link, useHistory,
} from 'react-router-dom'

import {
  AgGridColumn,
  AgGridReact
} from 'ag-grid-react';
// using ag-grid
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

import {
  addEmployee,
  delEmployee,
  getEmployees
} from '../redux/action/employee.action'
import ConfirmationDialog from './ConfirmationDialog'

// ag-grid EDIT button cell renderer
const AgEditCellRenderer = (props) => {

  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const buttonClicked = () => {
    alert(`${cellValue} medals won!`);
  };

  const history = useHistory()

  return (
    <>
      <span>{cellValue}</span>&nbsp;
      <Button
        variant='contained'
        // onClick={() => buttonClicked()}
        onClick={() => {
          history.push('/employee/edit')
        }}
      > EDIT</Button>
    </>
  );

}

// ag-grid DELETE button cell renderer
const AgDeleteCellRenderer = (props) => {

  const cellValue = props.valueFormatted ? props.valueFormatted : props.value;

  const buttonClicked = () => {
    alert(`${cellValue} medals won!`);
  };

  return (
    <>
      <span>{cellValue}</span>&nbsp;
      <Button
        variant='contained'
        onClick={() => buttonClicked()}
      > DELETE </Button>
    </>
  );

}

export default function EmployeeList() {

  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  // employee list state
  const employees = useSelector(state => state.employees)
  const handleAddEmployee = () => dispatch(addEmployee())

  const [isOpen, setDialogOpen] = React.useState()
  const handleOk = () => {

  }

  return (
    <div
      className="ag-theme-balham-dark"
      style={{
        height: '80vh',
        maxWidth: 1310, // set max width, depends on fix font-size and row details, only 5 column here very short
        margin: '0.8em 0 2.6em 0'
      }}
    >
      <div style={{ textAlign: 'end', margin: 6 }}>
        <Link to="/employee/add">
          <Button
            style={{
              margin: 10, padding: 5,
            }}
            variant='contained'
            onClick={handleAddEmployee}
          > Add </Button>
        </Link>
      </div>

      <AgGridReact

        gridOptions={{
          rowHeight: 45,
        }}
        frameworkComponents={{
          agEditCellRenderer: AgEditCellRenderer,
          agDeleteCellRenderer: AgDeleteCellRenderer,
        }}
        detailRowAutoHeight={true}
        rowData={employees}>
        <AgGridColumn field="firstName"></AgGridColumn>
        <AgGridColumn field="lastName"></AgGridColumn>
        <AgGridColumn field="email"></AgGridColumn>
        <AgGridColumn field="number"></AgGridColumn>
        <AgGridColumn field="gender"></AgGridColumn>
        <AgGridColumn
          field=""
          maxWidth={130}
          cellRenderer="agEditCellRenderer"
        />
        <AgGridColumn
          field=""
          maxWidth={130}
          cellRenderer="agDeleteCellRenderer"
        />

      </AgGridReact>

      <ConfirmationDialog
        onOk={() => handleOk()}
        onCancel={() => setDialogOpen(false)}
        open={isOpen}
        value={1}

        title={'Employee Insert'}
        body={'Form information checked. Confirm submission?'}
      />

    </div>
  )
}

