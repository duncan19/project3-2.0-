$(document).ready(function(){
  $("#userNumForm").submit(function(event){
    event.preventDefault();
    $("#userNumForm").hide();
    var arrayOfUserNUm=[];
    var usersNumber = parseInt($("input#userinputtedNumber").val());
      console.log(usersNumber)
      var numtoword = function(){
      console.log("test")
      var usersnumchange = usersNumber
      for(i=1; i <= usersNumber; i++){
        arrayOfUserNUm.push(usersnumchange)

        usersnumchange -= 1;
        }
        for (i = 0; i < arrayOfUserNUm.length; i ++){
         if(arrayOfUserNUm[i].toString().includes(3))
         {
           arrayOfUserNUm[i] = 'im sorry dave i cant od that';
         }
         else if (arrayOfUserNUm[i].toString().includes(2))
         {
           arrayOfUserNUm[i] = 'Boop';
         }
         else if (arrayOfUserNUm[i].toString().includes(1))
         {
           arrayOfUserNUm[i] = 'Beep';
         }
       }
       console.log((arrayOfUserNUm))
       var arrayforresult = arrayOfUserNUm.toString();
       $("#result").text(arrayforresult)
       $("#result").show();
};
console.log(numtoword())
});
});
