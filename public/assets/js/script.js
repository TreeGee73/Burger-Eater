$(document).ready(function () {
  $(".delete").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const id = $(this).data("id");
    // Send the DELETE request.
    $.ajax({
      url: "/api/delete-burgers/" + id,
      method: "DELETE",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".devour").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let id = $(this).data("id");
    // Send the PUT request.
    $.ajax({
      url: "/api/eat-burgers/" + id,
      method: "PUT",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    let burger = {
      burger_name: $("#burger").val().trim(),
    };
    // Send the POST request.
    $.ajax({
      url: "/api/add-burgers",
      method: "POST",
      data: burger,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
