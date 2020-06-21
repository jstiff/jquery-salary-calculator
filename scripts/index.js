$(document).ready(onReady);
function onReady() {
  console.log("jquery works!");
}
$("#newEmployeeBtn").on("click", addEmployee);
function addEmployee() {
  let userFirstName = $("#firstNameInput").val();
  let userLastName = $("#lastNameInput").val();
  let userId = $("#idInput").val();
  let userTitle = $("#titleInput").val();
  let userSalary = $("#salaryInput").val();

  let newEmployee = `<tr id="ne">
  <td>${userFirstName}</td>
  <td>${userLastName}</td>
  <td>${userId}</td>
  <td>${userTitle}</td>
  <td><span>$</span>${userSalary}</td>
  <td><button id="deleteBtn">Delete</button></td>
</tr>`;
  $("#tableBody").append(newEmployee);
  $('section input[type="text"]').val("");
}

$("#tableBody").on("click", "#deleteBtn", deleteEmployee);
function deleteEmployee(event) {
  console.log("delete btn works");
  $(this).closest("tr").remove();
}
