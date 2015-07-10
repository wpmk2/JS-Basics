//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
var isTyler = function(name) {
	if (name === 'Tyler') {
		return true;
	}
	else {
		return false;
	};
};
//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
var getName = function() {
	var userResp = prompt('What is your name?');
	return userResp;
};

//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
var welcome = function() {
	alert("Welcome" + " " + getName());
};

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
parameters are local scope variables definied by the function, 
and arguments are the values passed to the function in place of the parameters

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
NaN, null, undefined, 0, ""(emptystring), false
NEEEEEEEEEEEEEEEEEEEEEEEEEEED MORE WORDS  HERE

//Next Problem



//Create a function called myName that returns your name

  //Code Here
var myName = function () {
	return 'Wilson';
};
//Now save the function definition of myName into a new variable called newMyName

  //Code Here
newMyName = myName();
//Now alert the result of invoking newMyName
alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.
var outerFN = function () {
	function () { //there is a problem here on this line
		return 'Wilson';
	}
};
  //Code Here


//Now save the result of invoking outerFn into a variable called innerFn.
var innerFn = outerFn();

  //Code Here

//Now invoke innerFn.
innerFn();