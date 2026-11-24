
// var userPayment=+prompt("Enter the cusrtomar payment")
// var dis=0;

// if (userPayment >= 10000 ) {
//     dis=20
//    var di=(userPayment * 20) / 100;
//    alert("Your discount "+di)
// }else if (userPayment >= 5000){
// dis=10;
// var de =(userPayment * 10)/ 100;
// alert("your discount "+de)
// }else{
//     alert("Otherwise : no discount")
// }
// q2
// var bill = +prompt("Enter the your elecrticity bill unit")
// var billunit100 = 10;
// var billunit200 = 15;
// var morebillunit200 = 20;
// if (bill <= 100) {
//     var total = bill * billunit100;
//     console.log(total);

// } else if (bill <= 200) {
//     var total = (100 * 10) + (bill - 100) * billunit200;
//     console.log(total);

// } else if (bill >= 201) {
//     var total = (100 * 10) + (100 * 15) + (bill - 200) * morebillunit200;
//     console.log(total);
// }

// q3
// var firstsubject=+prompt("Enter the  English  Marks")
// var secondsubject= +prompt("Enter the  urdu  Marks")
// var thirdsubject= +prompt("Enter the  math  Marks")
// var obtientMarks=firstsubject + secondsubject + thirdsubject;
// console.log(obtientMarks);

// var totalMarks=300;
// var percentage=(obtientMarks / totalMarks ) * 100;
// if (percentage >= 90) {
//     console.log("Your grade is A+");
    
// } else if (percentage >= 80) {
//     console.log("Your grade is A");
    
// } else if (percentage >= 70) {
//     console.log("Your grade is B");
    
// }else if (percentage >= 60) {
//     console.log("Your grade is C");
    
// } else if (percentage >= 50) {
//     console.log("Your grade is D");
    
// }else{
//     console.log("Your grade is fail");
    
// }
// q4
// var balance=50000;
// var anount=+prompt("Enter the anoumt payment")
// if ( anount > balance) {
//     console.log("Insufficient Balance")
// }else if (anount <= 0) {
//     console.log("Invalid Balance")
// }else{
//     if (anount % 500 == 0) {
//        balance=balance - anount;
//        console.log("Transaction successful ") 
//        console.log("Remaining Balance :" + balance)
//     }else{
//         console.log("Please Enter an amount in multiples of 500")
//     }
// }
// q5
// var bill=prompt("Enter your bill amount")
// var membar =prompt("Do you have a membership card ? Yes/No")
// var discount=0;
// if (bill >=2001) {
//     if (bill >= 5000) {
//        discount=bill * 15 /100;
       

//     }
//     if (membar == "Yes") {
//         discount=discount + (bill * 5 / 100);
//         }
// }else{
//     discount=0;
// }
// var finalbill=bill -discount;
// console.log("Original Bill :" + bill);
// console.log("Discount :" + discount);
// console.log("Final Bill :" + finalbill);
// q6
// var age = +prompt("Enter your age");
// var day = prompt("Enter day of the week");

// var price = 0;

// if (age < 5) {
//     price = 0;
// }
// else if (age < 12) {
//     price = 300;
// }
// else if (age < 60) {
//     price = 600;
// }
// else {
//     price = 400;
// }

// if (day == "Wednesday" && age >= 5) {
//     price = price - (price * 20 / 100);
// }

// alert("Ticket Price: Rs. " + price );
// q7
// var package=prompt("How much data package do you need")
// if (package <= 5) {
// alert("Basic package 5 GB - Rs.300")
// }else if (package <= 15) {
//     alert("Standary package  15 GB - Rs.600 ")
// }else if (package <= 30) {
//    alert("Premium Package 30 GB -Rs. 1000") 
// }else {
//     alert("No avalible package")
// }
// q8
// var salary=+prompt("Enter the your Salary")
// var experience=+prompt("Enter the your Experience")
// var bonus=0;
// if (salary <= 30000) {
//     bonus=0
// }else if (experience >= 5) {
//     bonus=salary * 20 /100;
// }else if (experience >= 3) {
// bonus=salary * 10 / 100;
// }else  {
//     bonus=salary * 5 /100;
// }
// var finalsalary=salary + bonus;
// alert("Bonus :" +bonus)
// alert("Final Salary :" +finalsalary)
// q9
// var order=+prompt("Enter the order amount")
// var city= prompt("Enter the city")
// delivrey=0;
// if (order > 5000) {
//     delivrey=0;
// }else if (order >= 2000) {
//     delivrey=150;
// }else{
//     delivrey = 250;
// }
// if (city == "Karachi") {
//     delivrey =delivrey -50;
//     if (delivrey < 0) {
//         delivrey =0;
//     }
// }
// var total =order + delivrey;
// alert("Delivrey Charges :" + delivrey)
// alert ("Total amount  :" + total)
// q10
// var age = +prompt("Enter your age");
// var salary = +prompt("Enter your monthly salary");
// var experience = +prompt("Enter your job experience");

// if (age < 21) {
//     alert("Loan Rejected: Age must be 21 or above");
// }
// else if (salary < 50000) {
//     alert("Loan Rejected: Salary must be 50000 or above");
// }
// else if (experience < 2) {
//     alert("Loan Rejected: Experience must be 2 years or above");
// }
// else if (salary > 100000) {
//     alert("Loan Approved: Rs. 1000000");
// }
// else {
//     alert("Loan Approved: Rs. 500000");
// }
// q11
// var buy=45000;
// var sell =52000;
// var profit = sell - buy;
// var percentage = profit / buy * 100;
// alert("Total Profit : " + profit)
// alert ("Percentage : " + percentage)
// q12
// var money=5000;
// var food=money * 25 /100;
// var tranport= money * 15 / 100;
// var total =food + transaction;
// var remaining = money -total;
// alert("Food Expenes :" + food)
// alert("Transport Expenes : " + tranport)
// alert(" Total Expenes :" + total)
// alert("Remaining Expenes :" + remaining)
// q13
// var distance =180;
// var time =3;
// var speed =distance / time;
// alert("Average Speed : " +speed +"Km/h")
// q14
// var age=+prompt("Enter your current age")
// var futurage =age + 15;
// alert("Your age after 15 year old " +futurage)
// q15
// var stock=100;
// stock =stock - 5;
// stock =stock - 5;
// stock =stock - 5;
// stock =stock - 5;
// stock =stock - 5;
// stock =stock - 5;
// stock =stock - 5;
// alert("Remaining Stock " +stock)
// q16
var num=+prompt("Enter a number")
if (num > 0) {
    alert("Number is positive")
}else if (num < 0) {
   alert("Number is Nagetive") 
}else{
    alert("Number is Zero")
}
