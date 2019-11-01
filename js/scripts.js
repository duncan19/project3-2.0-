$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    var usersNum = parseInt($("input#userNumber").val());
    var userNumArr=[];
      console.log(usersNum)
    });
});
