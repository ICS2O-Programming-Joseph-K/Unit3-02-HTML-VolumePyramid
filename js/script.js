'use strict'
// Right riangular Pyramid calculator
function enterClicked () {
  // this function gets user's dimensions for right triangular pyramid, calculates the volume then displays it back to user

  // get sidea from text field
  let sidea = parseFloat(document.getElementById("side-a").value)
  
	// get sideb from text field
  let sideb = parseFloat(document.getElementById("side-b").value)
  
  // get height from text field
  let height = parseFloat(document.getElementById("height").value)
  
  // calculate volume of right triangular pyramid (fraction = 1/6 would be constant but put them in formula equation)
  let volume = (1/6) * sidea * sideb * height;
 
  document.getElementById('user-info').innerHTML = "The volume of your right triangular pyramid is " + volume.toFixed(2) + " m<sup>3</sup>"
}




