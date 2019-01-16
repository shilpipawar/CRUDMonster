$(document).ready(function () {
    $("#login").on("click", function () {
        $("#signup-form").addClass("hide");
        $("#login-form").removeClass("hide");
    });
    $("#signup").on("click", function () {
        $("#login-form").addClass("hide");
        $("#signup-form").removeClass("hide");

    });

});