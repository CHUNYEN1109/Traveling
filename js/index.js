
// Create functions for each validation using "tizag"
// create several different validators.
// Eventually, create one function to turn those functions into one function as formValidator(). 
function isAlphabet(elem, helperMsg){
	var alphaExp = /^[a-zA-Z]+$/;
	if(elem.value.match(alphaExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}

function constrainNum(elem, helperMsg){
	if(elem.value.length !== 12){
		alert(helperMsg);
		elem.focus(); // set the focus to this input
		return false;
	}
	return true;
}

function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


// comprass all validation into one function.
function formValidator(){
	// get our id from input
	var Fname = document.getElementById('Fname');
    var Lname = document.getElementById('Lname');
	var Phone = document.getElementById('Phone');
	var Email1 = document.getElementById('Email1');
	
	
	// compute each function
	if(isAlphabet(Fname, "Please enter only letters for your name")){
        if(isAlphabet(Lname, "Please enter only letters for your name")){
            if(isNumeric(Phone, "The number is not valid.")){
                if(constrainNum(Phone, "The number is not valid.")){  
                    if(emailValidator(Email1, "Please enter a valid email address")){
                        alert("Thank you for your submition !!\n\nWe will contact you soon. ");
                        return true;
                    }
                 }           
            }
        }
    }
    alter("Something went wrong.");
	return false;
	
}


function checkDates(){
	const today = new Date().toISOString().split('T')[0];
	document.getElementById("birthday").setAttribute("max", today);
  }

  window.onload = function(){
	checkDates();
  }