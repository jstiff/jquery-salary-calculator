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

  let newEmployee = `<tr>
  <td>${userFirstName}</td>
  <td>${userLastName}</td>
  <td>${userId}</td>
  <td>${userTitle}</td>
  <td><span>$</span>${userSalary}</td>
</tr>`;
  $("#tableBody").append(newEmployee);
  $('section input[type="text"]').val("");
}
