/*
function subtract (a,b) {
return a - b;
}

function sum (a,b) {
	return a + b;
 
}

function multiply (a,b) {
	return a * b
}

function power(a) {
	return Math.pow(a,3);
}

function factorial(num) {
	if (num < 0) {
        
        return -1;
    
    }else if (num ==0) {
        return 1;

    }else{
        return (num * factorial(num - 1));
       
    }
};
function operate(params) {
    
}


*module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}*/

function clr() {
	document.getElementById("number_display").value = ""  
   };



function backButton(){
let x = document.getElementById("number_display").value;
document.getElementById("number_display").value = x.substr(0, x.length - 1);

};


function lightToggle(){
    if(light == "0"){
        lightSwitchOn()
    } else{
        lightSwitchOff();
    }
}

function lightSwitchOn(){
    document.querySelector("link[href='calstyle.css']").href = "light.css";
    light++;
}

function lightSwitchOff(){
    document.querySelector("link[href='light.css']").href = "calstyle.css";
    light--;

}
let light = 0;

function dis(val) {
	document.getElementById("number_display").value+=val
	
};

function solve() {
	let x = document.getElementById("number_display").value
	let y = eval(x) 
	document.getElementById("number_display").value=y
	
   };



   function doSqrt() {
	let x = document.getElementById("number_display").value;
	let result = Math.sqrt(x);
	  document.getElementById("number_display").value = result
	 
  };

  function doSin() {
	let x = document.getElementById("number_display").value;
	let result = Math.sin(x);
	  document.getElementById("number_display").value = result
	 
  };

  function doCos() {
	let x = document.getElementById("number_display").value;
	let result = Math.cos(x);
	  document.getElementById("number_display").value = result
	 
  };

  function doTan() {
	let x = document.getElementById("number_display").value;
	let result = Math.tan(x);
	  document.getElementById("number_display").value = result
	 
  };
    function factorial(num) {
	
	if (num < 0) {
        
        return -1;              /* custom function for facto  */
    
    }else if (num ==0) {
        return 1;

    }else{
        return (num * factorial(num - 1));
       
    }
};

  function facto() {
	let num= document.getElementById("number_display").value;
	let result = factorial(num);							    	
	  document.getElementById("number_display").value = result
	 
	  /* factorial function  */
  };

  
	 

  function doCbrt() {
	let x = document.getElementById("number_display").value;
	let result = Math.cbrt(x)							    	
	  document.getElementById("number_display").value = result
  };

  function pie(radius) {

	return  Math.PI * radius;
  }
  
  function pi() {
	let radius = document.getElementById("number_display").value;
	let result = pie(radius)							    	
	  document.getElementById("number_display").value = result
  };

  function degree(radians)
  {
	var pi = Math.PI;
	return radians * (180/pi);
  }

  function deg() {
	  let radians = document.getElementById("number_display").value;
	  let result = degree(radians)
	  document.getElementById("number_display").value = result
  };