$(document).ready(function () {
  $("#button1").click(function () {
    var input = $("#input1").val();
    var a = input.charCodeAt(0);
    $("#output").text("ASCII code is  " + a);
  });
});
