$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    $("#userNumForm").hide();
    var arrayOfUserNUm=[];
    var usersNumber = parseInt($("input#userinputtedNumber").val());
      console.log(usersNumber)
    });
});
