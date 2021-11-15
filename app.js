/////string Methods
///////Chapter 21 to 25


//Question 1


// var fname = prompt("Enter Your First Name")
// var lname = prompt("Enter Your Last Name")
// var fullName = fname + " " + lname
// document.write(fullName)


//Question 2


// var mob = prompt("What is your favorite Mobile Phone");
// var mod = prompt("Enter Mobile Model")
// var str = mob + mod;
// var len = str.length
// document.write("My Favorite Phone Is: " + mob + " " + mod)
// document.write("<br> lenght of the String is " + len)


//Question 3


// var country = "Pakistani"
// var n = country.indexOf("n")
// console.log(n)


//For User

// var country = prompt("Enter Your Contry");
// var find = prompt("Enter Your Finding Word");
// var finding = country.indexOf(find)
// document.write("Your Contry IS: " + country + "<br>")
// document.write(finding)


//Question 4



// var a = "Hello World"
// var b = a.lastIndexOf("l")
// document.write("String" + a + "<br>")
// document.write("Last Index of l is " + b)

//Question 5

// var country = "Pakistani"
// var b = country.charAt(3)
// document.write("String: " + country)
// document.write("<br> Character at index 3 : " + b)


//for User

// var country = prompt("Enter Your Contry");
// var find = prompt("Enter Your Finding Word");
// var finding = country.charAt(find)
// document.write("Your Contry IS: " + country + "<br>")
// document.write("<br> Character at index:" + " " + find + "is " + finding)





//Question 6
// var a = prompt("Enter your firstname")
// var b = prompt("Enter your middlename")
// var fullName = a.concat(b)
// document.write(fullName)




//Question 7

// var a = "Islamabad"
// var b = a.replace("Islam", "Hyder")
// document.write("String : " + a + "<br>")
// document.write("Replacement : " + b + "<br>")

//Question 8
// var message = "“Ali and Sami are best friends.They play cricket and football together.”";
// var a = message.replace(/and/g, "&")
// document.write("String: " + message)
// document.write("<br>new: " + a)

//Question 9

// var a = "456"
// console.log(parseInt(a))
// var a = "456"
// console.log("Value: " + (a))
// console.log(typeof(a) + ": " + a)
// var b = Number(a)
// console.log("Value: " + b)
// console.log(typeof(b) + ": " + b)

//Question 10


// var a = prompt("Enter any word")
// var b = a.toUpperCase()
// document.write("User Input: " + a)
// document.write("<br> ToUppercase: " + b)

//Question 11

// var a = prompt("Enter You Subject")
// var b = a.slice(0, 1).toUpperCase()
// var c = b + a.slice(1)
// document.write("User Input: " + a)
// document.write("<br>User Input: " + c)


//Question 12

// var num = 35.65
// var a = num.toString()
// document.write("Number" + num)


//Question 13


// var email = prompt("Enter Your Email")

// var flag = false

// for (var i = 0; i < email.length; i++) {

//     if (email.charAt(i) === "@") {
//         alert("ASCII code of @ is 64")
//         flag = true
//     }
//     if (email.charAt(i) === ",") {
//         alert("ASCII code of , is 44")
//         flag = true
//     }
//     if (email.charAt(i) === ".") {
//         alert("ASCII code of . is 46")
//         flag = true
//     }
//     if (email.charAt(i) === "!") {
//         alert("ASCII code of ! is 33")
//         flag = true
//     }

// }

// if (!flag) {
//     alert("INVALID ")
// }



//Question 14

// var a = ["cake", "apple pie ", "cookie", "chips", "patties"]
// var b = prompt("Enter Your Buiscuit")
// var flag = false

// for (var i = 0; i > a.length; i++) {
//     if (b.charAt(i) === a)
//         document.write(yes)
//     flag = true
// }
// if (!flag) {
//     alert("No")
// }

//Question 15

// var a = prompt("Enter your Password")
// if (a === "" || a.length < 6) {
//     document.write("Please Enter a valid Password")
//     b = /[a-zA-Z]/;
//     c = /[0-9]/
//     if (pass.match(a) && pass.match(b))

// }



// var a = prompt("Enter")
// if (a == "") {
//     alert("Error: password cannot be blank!");
//     a.focus();
//     return false;
// }
// re = /^\w+$/;
// if (!re.test(a)) {
//     alert("Error: Username must contain only letters, numbers and underscores!");
//     a.focus();
//     return false;
// }


// if (a.length < 6) {
//     alert("Error: Password must contain at least six characters!");
//     a.focus();
//     return false;
// }
// re = /[0-9]/;
// if (!re.test(a)) {
//     alert("Error: password must contain at least one number (0-9)!");
//     a.focus();
//     return false;
// }
// re = /[a-z]/;
// if (!re.test(a)) {
//     alert("Error: password must contain at least one lowercase letter (a-z)!");
//     a.focus();
//     return false;
// }
// re = /[A-Z]/;
// if (!re.test(a)) {
//     alert("Error: password must contain at least one uppercase letter (A-Z)!");
//     a.focus();
//     return false;
// } else {
//     alert("Error: Please check that you've entered and confirmed your password!");
//     a.focus();
//     return false;
// }

//Question 17

// var a = prompt("Enter your Contry")
// var b = a.lastIndexOf(a)
// document.write("Your country is " + a)
// document.write("<br>" + b)

//Question 18


// var a = "The quick brown fox jumps over the lazy dog"
// var b = a.indexOf("s")
// console.log(b)
// MATH METHODS




//Question 1


// var a = +prompt("Enter Your P{ossitive Integers")
// document.write("number " + Number(a));
// document.write("<br>Round off value of " + a + "is " + Math.round(a));
// document.write("<br>Floor Value of " + a + "is " + Math.floor(a));
// document.write("<br>ciel Value of " + a + "is " + Math.ceil(a));

//Question 2

// var a = -prompt("Enter Your negative Integers")
// document.write("number " + Number(a));
// document.write("<br>Round off value of " + a + "is " + Math.round(a));
// document.write("<br>Floor Value of " + a + "is " + Math.floor(a));
// document.write("<br>ciel Value of " + a + "is " + Math.ceil(a));



//Question 4

// var b = Math.random() * 4 + 3
// document.write(b)

//Question 5

// var headUser = prompt("ENTER YOUR NAME", "HEADUSER")
// var tailUser = prompt("ENTER YOUR NAME", "TAILUSER")


// var toss = Math.floor(Math.random() * 4 + 1)


// console.log(toss);

// if (toss == 1) {
//     alert("headUser win :  " + headUser)
// } else if (toss == 2) {
//     alert("match draw")
// } else if (toss == 3) {
//     alert("tailUser win :  " + tailUser)
// } else {
//     alert("ENTER CORREct VALUE")
// }


//Qyestion 6
// var b = Math.random() * 100 + 1
// document.write(b)

//Question 7


// var a = +prompt("Enter Your Weight")
// document.write(a + "<br>")
// document.write(a + "Kgs<br>")
// document.write(Math.floor(a) + "Kgs<br>")
// document.write(Math.ceil(a) + "kilogram<br>")

// //Question 8
// var b = +prompt("Enter your number")
// var a = 2;

// if (b === a) {
//     document.write("Congratulation")
// } else
//     document.write("Try later")