function compute()
	{
		var g1,g2,g3,g4; // 
		var principal = document.getElementById("principal").value;
		var rate = document.getElementById("rate").value;
		var years = document.getElementById("years").value;
		var interest = principal * years * rate /100;
		var year = new Date().getFullYear()+parseInt(years); 

		g1 = document.getElementById("result1").innerHTML = "<br><br>If you deposit ";
		document.getElementById("principal_result").innerHTML = principal;
            // output amount
		g2 = document.getElementById("result2").innerHTML = "<br>at an interest rate of ";
		document.getElementById("rate_result").innerHTML = rate;
            // output Interest rate
		g3 = document.getElementById("result3").innerHTML = "<br> You will receive an amount of ";
		document.getElementById("interest_result").innerHTML = interest;
            // output results
		g4 = document.getElementById("result4").innerHTML = "<br>in the year ";
		document.getElementById("year_result").innerHTML = year;
            // output what year will give you money
	}
function updateRate() // update function for our range value
	{
    	var rateval = document.getElementById("rate").value; 
    	document.getElementById("rate_val").innerText=rateval;
	}
function checkdata(){
         		 //create references to the input elements we wish to validate
         	 var amount  = document.getElementById("principal");
         		 //Check if amount field is 
         	 if(amount.value <=0 || amount.value == "") {
                	alert("Enter a positive number");
                	amount.focus();
                	location.reload();
                	return false; 
          			}
               return true;
        	}