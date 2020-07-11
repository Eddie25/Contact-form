    var sect = document.getElementById("whole_section");
    var names = document.getElementById("names");
    var address = document.getElementById("address");
    var message = document.getElementById("message");
    var num = document.getElementById("answer");
    var output = document.getElementById("submitDataCarrier");
    var sub = document.getElementById("submit");
    var nError = document.getElementById("name-error");
    var mError = document.getElementById("mail-error");
    var tError = document.getElementById("text-error");

 /* function pass() {
    var u = 'Tempest';
    var p = '1234';
    var username = prompt("Enter your Username:");
    var password = prompt("Enter your Password:");
     if (username == u && password == p) {
        alert("Welcome");
        sect.style.visibility = 'visible';
        sect.style.display = 'block';
      }else if(username == blank || password == blank) {
        alert("The username or password field cannot be empty!");
      }else {
        alert("You must provide the correct username\n and password to gain access");
      }
    }*/

     function change() {
      names.value = names.value.toUpperCase();
     }

function validateEmail() {
var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (address.value.match(emailFormat)) {
    mError.style.visibility = 'hidden';
	sub.style.cursor = 'pointer';
	sub.disabled = false;
	address.value = address.value.toLowerCase();
}else {
	mError.style.visibility = 'visible';
    sub.style.cursor = 'not-allowed';
    sub.disabled = true;
    address.value = address.value.toLowerCase();
}
}

function maxlength() {
	if (num.value.length > num.maxLength);
	 num.value = num.value.slice(0, num.maxLength);
}

var blank = '';
var spaces = /^\s+?$/;

    /*function submitDetails() {
      if(names.value == "" || names.value.match(spaces)) {
         nError.style.visibility = 'visible';
    sub.style.cursor = 'not-allowed';
    sub.disabled = true;
      }else {
      	nError.style.visibility = 'hidden';
	sub.style.cursor = 'pointer';
	sub.disabled = false;
      } 
      if(num.value == "") {
        alert("Please answer the antispam question");
    
    }else if(num.value == 4) {
    	names.value = names.value.trim();
        document.write("<center><h1>Mail was sent successfully</h1><center><h2>Your details are as follows:</h2></center><h3 style=\"text-align: center;\">Name : </h3>" + names.value + ".<br><h3 style=\"text-align: center;\">Email : </h3>" + address.value + ".<br><h3 style=\"text-align: center;\">Your message : </h3>" + message.value + ".<br><center><h3 style=\"text-align: center;\">You answered the anti-spam question correctly :" + " " + num.value + ".");
      }else {
      alert("You answered the antispam question incorrectly...2 + 2 is not" + " " + num.value + "!");
      }
  }*/
      	window.onload = function() {
      	alert("This webpage is responsive. The Username is \"Tempest\" and the Password is \"1234\". If you login, enter some values in the inputs provided, then click submit and see what happens.");
      	//pass();
    };
   
  