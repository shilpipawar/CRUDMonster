$(document).ready(function() {
  // Showing and hiding login form
  $("#login").on("click", function() {
    $("#signup-form").addClass("hide");
    $("#login-form").removeClass("hide");
  });
  $("#signup").on("click", function() {
    $("#login-form").addClass("hide");
    $("#signup-form").removeClass("hide");
  });

  // Grab values from new expense form
  $("#new-expense-submit").on("click", function() {
    event.preventDefault();
    var category = $("#category").val();
    var description = $("#description").val();
    var amount = $("#amount").val();
    var date = $("#date").val();

    console.log(category);
    console.log(description);
    console.log(date);
    console.log(amount);
  });
});
