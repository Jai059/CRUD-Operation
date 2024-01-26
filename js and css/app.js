// Assume you have an array to store employee data
let employeeData = [];
let selectedEmployeeIndex = -1; // To keep track of the selected employee for editing

// Function to handle form submission (Create or Update operation)
function onFormSubmit() {
  const fullName = document.getElementsByName("fullName")[0].value;
  const empCode = document.getElementsByName("empCode")[0].value;
  const salary = document.getElementsByName("salary")[0].value;
  const city = document.getElementsByName("city")[0].value;

  if (selectedEmployeeIndex === -1) {
    // Create operation
    const newEmployee = { fullName, empCode, salary, city };
    employeeData.push(newEmployee);
  } else {
    // Update operation
    employeeData[selectedEmployeeIndex].fullName = fullName;
    employeeData[selectedEmployeeIndex].empCode = empCode;
    employeeData[selectedEmployeeIndex].salary = salary;
    employeeData[selectedEmployeeIndex].city = city;

    // Reset selected employee index after update
    selectedEmployeeIndex = -1;
  }

  // Update the table (Read operation)
  updateTable();

  // Clear the form after submission
  clearForm();
}

// Function to update the table (Read operation)
function updateTable() {
  const tableBody = document.querySelector("#employeeList tbody");
  tableBody.innerHTML = "";

  // Populate the table with employee data
  employeeData.forEach((employee, index) => {
    const newRow = tableBody.insertRow();
    newRow.innerHTML = `<td>${employee.fullName}</td>
                        <td>${employee.empCode}</td>
                        <td>${employee.salary}</td>
                        <td>${employee.city}</td>
                        <td>
                          <button onclick="onEdit(${index})">Update</button>
                          <button onclick="onDelete(${index})">Delete</button>
                        </td>`;
  });
}

// Function to handle edit operation
function onEdit(index) {
  // Set the selected employee index
  selectedEmployeeIndex = index;

  // Populate the form with the selected employee's data
  const selectedEmployee = employeeData[index];
  document.getElementsByName("fullName")[0].value = selectedEmployee.fullName;
  document.getElementsByName("empCode")[0].value = selectedEmployee.empCode;
  document.getElementsByName("salary")[0].value = selectedEmployee.salary;
  document.getElementsByName("city")[0].value = selectedEmployee.city;
}

// Function to handle delete operation
function onDelete(index) {
  // Remove the employee at the specified index
  employeeData.splice(index, 1);

  // Reset selected employee index after deletion
  selectedEmployeeIndex = -1;

  // Update the table after deletion
  updateTable();
}

// Function to clear the form
function clearForm() {
  document.getElementsByName("fullName")[0].value = "";
  document.getElementsByName("empCode")[0].value = "";
  document.getElementsByName("salary")[0].value = "";
  document.getElementsByName("city")[0].value = "";
}
