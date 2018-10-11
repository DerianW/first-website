'use strict'
document.getElementById("wooder").innerHTML = "wooder (the drink)" ;

function toCelsius(fahrenheit) { return (5/9) * (fahrenheit-32) ; }
document.getElementById("con").innerHTML = toCelsius(77); 