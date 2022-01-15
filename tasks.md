# Frontend Technical Test - Employee Manager


## Routes

--- 

  * [Homepage](http://localhost:3000/employee/list)
    The homepage will display a list of employees with following mentioned attributes in a table
    <br />	`FirstName `
    <br />	`LastName`
    <br />	`Email` 
    <br />	`PhoneNumber`
    <br />	`Gender`
    <br />	<b>Edit/Delete button</b> on each row at the end of the row. 

  * `GET` - https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees as initial `state`

  * [Add Employee](http://localhost/employee/add) 
In the same page, Above Table, in the top right corner, should have an option to “Add” Employee.

```json
  {
    "FirstName": "", // (Reusable Textbox) Minimum 6 character and max 10 characters validation. 
    "LastName": "", // Minimum 6 character and max 10 characters validation. 
    "Email": "", // Email address (Reusable Textbox) email validation.
    "PhoneNumber": "", // SG phone number validation.
    "Gender": "" // (Radio Button Group)
  }
```
<b>Submit button</b> at the bottom right corner.

By clicking on Submit button, Form must be validated and should be highlighted with red border color with validation message at the down of each incorrect input fields in the form.

* [Edit Button](http://localhost/employee/edit)
  - same router params
  - display clicked employee information

  ![]()

* If User made some changes and moving away from this page, need a warning stating that `Form has been modified. You will lose your unsaved changes. Are you sure you want to close this form?`

* [OK Button]() - take to destination page where he was intended to go. Otherwise stay in the same page.

* [Delete Button]() - Confirmation popup should appear. Summary page should be refreshed.

### For CRUD operation, you can use localStorage `Bonus: Make use of redux saga library to handle side effects`

<!-- What we are looking for  -->
<!-- 1.	Applicant’s ability to code, code readability, folder structure and reusability of the components. 
2.	CSS coding style. Try to reduce and use your own custom style even when using the css framework
3.	Ability to use different react libraries such as Redux, Router, Redux Form 
4.	Redux State management
5.	Applicants are encouraged to use best practices -->