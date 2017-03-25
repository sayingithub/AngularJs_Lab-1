//alert("Hello AngularJS")

//Using jQuery to retrieve the custom attribute value to proof "reply-back" custom attribute is part of the DOM
//Write to developer console log
console.log($("h2").attr("reply-back"));

//HTML5 supports custom attributes with "data-"
console.log($("h3").attr("data-reply-back"));

// ANgularJS support custom attributes w3ith "ng-"
console.log($("h4").attr("ng-reply-back"));

// person is Global Namespace. If we are using someother JS which has the same "person", then we will have global namespace conflicts
var person = "Tony";
console.log("app1.js Global variable called --> "+person);
logPerson(); //

var username = "Alex";
console.log(username);
steveApps.logUserName();