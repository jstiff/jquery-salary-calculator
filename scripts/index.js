$(document).ready(onReady);
function onReady() {
  let totalCost = 0;
  let maxCost = 20000;
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
  <td id="salary"><span>$</span>${userSalary}</td>
  <td><button id="deleteBtn">Delete</button></td>
</tr>`;
    $("#tableBody").append(newEmployee);
    $('section input[type="text"]').val("");
    totalCost = totalCost + parseInt(userSalary);
    $("#cost").text(parseInt(totalCost));
    if (totalCost >= maxCost) {
      $("#cost").css("background-color", "red");
    } else if (totalCost < maxCost) {
      $("#cost").css("background-color", "rgb(224, 231, 238)");
    }
  }

  $("#tableBody").on("click", "#deleteBtn", deleteEmployee);
  function deleteEmployee(event) {
    console.log("delete btn works");
    let poop = $(this).closest("#salary");
    $(this).closest("tr").remove();

    console.log(poop);
  }
}
