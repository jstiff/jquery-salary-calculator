$(document).ready(onReady);
function onReady() {
  let i = 1;
  let totalCost = 0;
  let maxCost = 20000;
  let collection = [];
  $("#newEmployeeBtn").on("click", addEmployee);
  function addEmployee() {
    let newObj = {
      userFirstName: $("#firstNameInput").val(),
      userLastName: $("#lastNameInput").val(),
      userId: $("#idInput").val(),
      userTitle: $("#titleInput").val(),
      userSalary: $("#salaryInput").val(),
    };

    let newEmployee = `<tr id="ne">
  <td>${newObj.userFirstName}</td>
  <td>${newObj.userLastName}</td>
  <td>${newObj.userId}</td>
  <td>${newObj.userTitle}</td>
  <td id="salary"><span>$</span>${newObj.userSalary}</td>
  <td><button id="deleteBtn" data-salary=${newObj.userSalary}>Delete</button></td>
</tr>`;
    $("#tableBody").append(newEmployee);
    $("#deleteBtn").data("salary", newObj.userSalary);
    collection.push(newObj);

    $('section input[type="text"]').val("");
    totalCost = totalCost + parseInt(newObj.userSalary) / 12;
    $("#cost").text(parseInt(totalCost));
    if (totalCost >= maxCost) {
      $("#cost").css("background-color", "red");
    } else if (totalCost < maxCost) {
      $("#cost").css("background-color", "rgb(224, 231, 238)");
    }
  }

  $("#tableBody").on("click", "#deleteBtn", deleteEmployee);
  function deleteEmployee() {
    let value = $(this).data("salary");
    totalCost -= value / 12;

    $("#cost").text(totalCost);
    $(this).closest("tr").remove();
  }
}
