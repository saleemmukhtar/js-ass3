
//Js Assignment 3//

//chp 31-34//

//Answer 1//

// var a = new Date()
// alert (a)


//Answer 2//

// var m = new Date();
// var month = ["January","February","March","Aprail","May","June","July","August","Septamber","October","November","December"]

// var n = month[m.getMonth()];
// alert (n)


//Answer 3//

// var d = new Date();
// var day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
// var n = day[d.getDay()];
// alert ("Today is "+n+"")

//Answer 4//

// var d = new Date().getDay();

// if (d > 5 ){
// alert ("Today is Funday ")
// }
// else{
//     alert ("It is Working day")
// }



//Answer 5//
// var date = new Date();
// if (date.getDate() <= 15) {
//     alert("The Fist Fifteen Days Of Month")
// } else if (date.getDate() <= 31) {
//     alert("The Last Fifteen Days Of Month")
// }

//Answer 6//

// var intial = new Date ("Jan 1, 1970")
// var a = new Date()
// var intial1 = intial.getTime()
// var current = a.getTime()
// var total = (current - intial)/(1000*60*60)
// var c = total.toFixed (4)

// var b = Math.floor (total)
// document.write ("Elapsed minutes from Jan 1,1970 is : " +b+"")



//Answer 7//

// var time = new Date()
// var a = time. getHours()
// if (a <= 12){
//     alert ("Its Am ")
// }
// else {
//     alert ("Its Pm")
// }


//Answer 8//

// var time = new Date("December 31, 2020");
// document.write ("Later date " +time)


//Answer 9 //


// var pramzan = new Date ("June 18, 2015")
// var a = new Date()
// var pramzan1 = pramzan.getTime()
// var current = a.getTime()
// var total = (current - pramzan1)/(1000*60*60*24)
// var c = total.toFixed (4)

// var b = Math.floor (total)
// alert ("Days " +b+"")


//Answer 10//

// var dec = new Date ("Dec 05, 2015 22:50:16")
// var jan = new Date("Jan 01, 2015")
// var dec1 = dec.getTime()
// var current = jan.getTime()
// var total = (dec1 - current)/(1000*60)
// var b = Math.floor (total)
// document.write ("On referance date " +dec+ ", <br />" +b+ " seconds had passed since begining of 2015 ")


//Answer 11//

// var currennt = new Date();
// var time = new Date();
// var final = time.setHours(time.getHours() - 1);
// document.write("current date is : " + currennt + "</br>");
// document.write("1 hour age : it was : " + time);

//Answer 12 //

// var current = new Date();
// document.write(' Current Date :' + current);
// current.setFullYear(current.getFullYear() - 100);
// document.write('<br>100 year(s) back, it was ' + current);


//Answer 13 //

// var age = +prompt ("Enter your age !")
// var year = new Date().getFullYear() - age
// document.write (" Your age is " +age+" <br /> Your birth Year is " +year+"")

//ANSWER 14//

// var customerName = prompt("Enter user name here");
// var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var Nmonth = months[new Date().getMonth()];
// var numUnits = 410;
// var charge = 16;
// var netAmount = numUnits * charge;
// var lateCharge = 350;
// var crossAmount = netAmount + lateCharge;

// document.write(`<h1>K-Electric Bill</h1>Customer Name: <b>${customerName}</b><br>Month: <b>${Nmonth}</b><br> Number of units: <b>${numUnits}</b><br>Charges per unit: <b>${charge}</b><br><br>Net Amount Payable(within Due Date) : <b>${netAmount}</b><br>Late payment surchargee: <b>${lateCharge}</b><br>cross Amount Payable (after Due Date): <b>${crossAmount}</b><br>`)


//End chp 31-34//

//Start Chp 35-38//

//Answer 1//

// function date (){
//     var a = new Date ()
//     document.write (a)

// }
// date();


//Answer 2//
// function uname (){
//     var fname = prompt ("Enter your first name")
//     var lname = prompt ("Enter your last name")
//     var a = fname+lname
//     document.write ("HELLO "+a+ "" )
    
// }
// uname();


//Answer 3////

// function add (){
//     var fnum = +prompt ("Enter your first number ")
//     var lnum = +prompt ("Enter your second number ")
//     var a = fnum+lnum
//     return a;

// }
// var b = add()
// alert (b);


//Answer 4//

// function calculator(){
//     var num1 = +prompt ("Enter your first number ")
//     var num2 = +prompt ("Enter your second number ")
//     var opp =   prompt ("Enter your operator ")
//     if (opp == "+"){
//             alert ("Your result = "+(num1+num2)+ "")
//         }else if  (opp == "-"){
//             alert ("Your result = "+(num1-num2)+ "")
//         }else if (opp == "*"){
//             alert ("Your result = "+(num1*num2)+ "")
//         }else if (opp == "/"){
//             alert ("Your result = "+(num1/num2)+ "")
//         }
//         else if (opp == "%"){
//             alert ("Your result = "+(num1%num2)+ "")
//         }
        

// }

// calculator();


//Answer 5//


// function squ(){
//     var num1 = +prompt ("Enter your number to check is square ")
// var square = num1*num1
// alert (square)
// }
// squ()


//Answer 6//

// function factorial(n){
//     var a =  answer = 1;
//     if (n == 0 || n == 1){
//       return answer;
//     }else{
//       for(var i = n; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }  
//   }
//   var n = prompt("Enter the number")
//   answer = factorial(n)
//   document.write("The factorial of " + n + " is " + answer);

  //Answer 7//

// function counts(num1,num2) {
//         for (i = num1; i <= num2; i++) {
//             document.write(i)
//         }
//     }
//     var num1 = +prompt ("Enter start number") 
//     var num2 = +prompt ("Enter End number") 
//     ans = counts (num1,num2)


//Answer 8//
// function calHypotenus(base,perpendicular) {
//     function calSquare(num) {
//         return Math.pow(num,2)
//     }
//     var hypotenus = calSquare(base) + calSquare(perpendicular);
//     return document.write(hypotenus)
// }

// calHypotenus(10,12);

//Answer 9//

// function area(weidth,height){

//     var area = weidth*height
//     document.write ("The area rectangle is = " +area+ "m<sup>2</sup>")

//  }
//  area(20,10);
 
//Answer 10//


// function checkPalindrome(str){
//        var cstr = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var count = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             count = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
//                 count = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a Palindrome.");
//         return document.write("this string is palindome");
//     }

//     checkPalindrome("madam");

//  var user = prompt("Enter Any thing to convert first letter to capital");
// function toTitleCase(str) {
//     return str.replace(/\w\S*/g, function(txt){
//         return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//     });
// }

//Answer 11//

// function titleCase(string) {
//   var sentence = string.toLowerCase().split(" ");
//   for(var i = 0; i< sentence.length; i++){
//      sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
//   }
// document.write(sentence.join(" "));
// return sentence;
// }
// titleCase("the quick brown fox");

//Answer 12//

// function largestWord(string) {
//     var str = string.split(" ");
//     var largest = 0;
//     var word = null;
//     for (var i = 0; i < str.length; i++) {
//         if (largest < str[i].length) {
//             largest = str[i].length;
//             word = str[i];
//         }
//     }
//     return word;
// }
// var largest = largestWord("Web Development Tutorial");
// document.write("Example String "+"Web Development Tutorila"+ "<br> Expected Output :"+largest);


//Answer 13//

// function Occur(string,word) {
//       var regex = new RegExp(word,"g")
//       var result = (string.match(regex) || []).length;
//       return document.write(result);
//   }
                                                                         
//   Occur("JSResourceS.com","o");





//Answer 14//
//  function calcCircumference( radius ) {
//    var circum = 2*(3.142) *radius
//    document.write ("The circumference of circle is: " +circum+ "<br />")

//  }
//  function calcArea(radius){
//    var radius = (3.142)*radius*radius
//    document.write ("The radius of circle is: " +radius+ "")

//  }
//  calcCircumference (10);
//  calcArea (10);

//End chp 35-38//

//Start chp 38-42//

//Answer 1//

//  function power (a,b) {
//    var n = Math.pow (a,b)
//    return n
//  }
//  var base = +prompt ("Enter your base value")
//  var pow =  +prompt ("Enter your power value")
//  var result = power (base,pow)
//  document.write ("Your final answer is = " +result+"")


//Answer 2//

// function leapYear(z)
// {

// if(z%4 === 0 )
// {

// document.write(z+" is a Leap Year")
// }
// else {
//     document.write(z+" is Not a Leap Year")
// }

// }

// var number = +prompt("Please enter the Year here") 

// var result = leapYear(number)

//Answer 3//

// function length1(a,b,c){

//   var s= length2(a,b,c)
  
//   var result = s * ( s -a)*(s-b)*(s-c)
//   return result
  
//   }
  
//   function length2(a,b,c){
  
//       var result = (a+b+c)/2
//       return result
  
//   }
  
//   var a = +prompt("Enter the length of first side of a triangle here")
//   var b = +prompt("Enter the length of second side of a triangle here")
//   var c = +prompt("Enter the length of third side of a triangle here")
  
//   var result = length1(a,b,c)
//   document.write("The area of a triangle is "+result)
  

//Answer 4//

// function average (a,b,c){
//   var result = (a+b+c)/3
//   return result;
// }

// function percentage (a,b,c) {
//   var per = ((a+b+c)/300)*100
//   return per;

// }


// var avg = average(70,70,80)
// var tper = average(70,60,70)

// document.write("Average of the marks is: " +avg+  "<br/>")
// document.write("Percentage of the marks is: " +tper)


//Answer 5//

// function index (){

// var str = "Pakistani"
// var a = str.lastIndexOf ("n")
// document.write (a)
// }
// index()

//Answer 6//

// var str = prompt("Please enter the text here")

// for (var i=0; i<str.length; i++)
// {
// //     if(str.charAt(i) === "a"||"e"||"i"||"o"||"u")   {
// // //        ||"e"||"i"||"o"||"u"

// if(str.charAt(i) === ("a"||"e"))
// {
// document.write(str.charAt(i)+"<br>")
// }
// }

// var numChars = str.length;
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 1) === "a"||"e") {

// alert("wovel found");

// }
// }



//Answer 7//

// var isVowel= false

// var  str = "a"
// for (var i = 0; i < str.length; i++){
// var ch = str.charAt(i)
// switch(ch) {
// case  'a':
// case  'e':
// case  'i':

// default :
// alert("Shoot me now!");
// }


// }


//Answer 8//
// function convertMeter(a)
// {

// var meter = a*1000
// document.write("The distance between two cities in Meters is "+meter+"<br>")

// }

// function convertFoot(a)
// {
//     var foot = a*1000*3.28084
//     document.write("The distance between two cities in Feets is "+foot+"<br>")

// }

// function convertInch(a)
// {

//     var inch = a*1000*39.3701
//     document.write("The distance between two cities in Feets is "+inch+"<br>")
// }

// function convertCentimeter(a)
// {
//     var centiMeter = a*1000*100
//     document.write("The distance between two cities in Centimeters is "+centiMeter+"<br>")
// }


// var distance =+prompt("Enter the Distance between two Cities here")

// var meter = convertMeter(distance)
// var inch  = convertInch(distance)
// var foot =   convertFoot(distance)
// var centiMeter = convertCentimeter(distance)


//Answer 9//
// var input = +prompt("Please enter the Number of Hourse worked here")

// var workHours = 40
// if (input > 40) {

// var overTime = input-workHours
// var overTimeAmount = overTime * 12  
// alert("Your Overtime Payment for "+overTime+" over time hour(s) worked is Rs."+overTimeAmount)
// }

// else {
// alert("Sorry You are not entitled for any Overtime payment")
// }


//Answer 10//

// var check = +prompt('Enter the first number ');
// var hun =  Math.floor( check/100); 
// var fif = Math.floor((check % 100) / 50);
// var ten = Math.floor(((check % 100) % 50) / 10);

// document.write("The Notes of 100 required is "+hun+" and the notes of fifty required is "+fif+" and the notes reuired for ten is "+ten);

//end//