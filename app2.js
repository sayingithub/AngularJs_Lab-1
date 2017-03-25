// Conflict with Global namespace. person is available in both app1.js sand app2.js
var person = "Steve";

function logPerson(){
    console.log(person);
}

// To avoid the Global namespace conflicts, used the object creation like below
var steveApps = {};
steveApps.username = "Steve";
steveApps.logUserName = function(){
    console.log(steveApps.username);
}