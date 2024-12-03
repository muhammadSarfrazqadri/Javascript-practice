var userName = prompt("Please Enter Your Name!")
var main = true;

while (main) {
    var selected = prompt("Hi " + userName + ". I hope you will be fine. \nwhat do you like to ask?\n1: Do You Want to Check Date? \n2: Do You Want to Check Time? \n3: Do You Want to calculate your marks & percentage? \n4: Do You Want to use calculator?\n5: Do You Want to Exit Program?")

    if (selected === "1") {
        alert("The Date is : " + date())

    } else if (selected === "2") {
        alert("Now the Time is : " + time())
    } else if (selected === "3") {
        var marks = true;

        while (marks) {
            var english = Number(prompt("How much Number You Got in English?"))
            var urdu = Number(prompt("How much Number You Got in Urdu?"))
            var math = Number(prompt("How much Number You Got in Math?"))
            var total_mark = 100
            var total_mark_each_subject = 300

            alert(
                "English = " + english + " / " + total_mark + "\n" +
                "Urdu = " + urdu + " / " + total_mark + "\n" +
                "Math = " + math + " / " + total_mark + "\n" +
                "Your Total Marks are : " + (english + urdu + math) + "/" + total_mark_each_subject + "\n" +
                "Your percentage is : " + ((english + urdu + math) * 100 / total_mark_each_subject).toFixed(2) + "%"
            )
            var again_check_marks_or_no = prompt("1: Do you Want to use more?  \n2: Go to Main Menu \n3: Exit Program")

            if (again_check_marks_or_no === "1") {
                continue;
            } else if (again_check_marks_or_no === "2") {
                marks = false;
            } else if (again_check_marks_or_no === "3") {
                marks = false;
                main = false;
                alert("Thank you for using the program. Goodbye!");
            } else {
                alert("Invalid choice! Returning to Main Menu.");
                calculator_circle = false;
            }
        }

    } else if (selected === "4") {
        var calculator_circle = true;

        while (calculator_circle) {
            var fNum = Number(prompt("Enter First Number!"))
            var op = prompt("Enter Operator ( + , - , / , *) !")
            var sNum = Number(prompt("Enter Second Number!"))
            var calcResult = calculator(fNum, op, sNum)
            alert(calcResult)
            var user_choise = prompt("1: Do you Want to use more?  \n2: Go to Main Menu \n3: Exit Program")

            if (user_choise === "1") {
                continue;
            } else if (user_choise === "2") {
                calculator_circle = false;
            } else if (user_choise === "3") {
                calculator_circle = false;
                main = false;
                alert("Thank you for using the program. Goodbye!");
            } else {
                alert("Invalid choice! Returning to Main Menu.");
                calculator_circle = false;
            }
        }
    } else if (selected === "5") {
        main = false;
        alert("Thank you for using the program. Goodbye!");
    } else {
        alert("Invalid choice! Closed Program.");
        main = false;
    }
}




/////////////////////////////////////////////////////////////////////
/////////////                                           /////////////
/////////////               FUNCTIONS PORTION           /////////////
/////////////                                           /////////////
/////////////////////////////////////////////////////////////////////



function calculator(firstNum, operater, secondNum) {
    if (operater === "+") {
        var calcResult = "Your Answer is : " + (firstNum + secondNum)
    } else if (operater === "-") {
        var calcResult = "Your Answer is : " + (firstNum - secondNum)
    } else if (operater === "*") {
        var calcResult = "Your Answer is : " + (firstNum * secondNum)
    } else if (operater === "/") {
        var calcResult = "Your Answer is : " + (firstNum / secondNum)
    } else {
        calcResult = ("Your Enterd Value is Invalid")
    }

    return calcResult;
}

function time() {
    var tell_time = null;
    var now = new Date()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var am_pm = " AM";
    if (hours > 12) {
        hours = (hours -= 12);
        am_pm = " PM";
    } else if (hours === 0) {
        hours = 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + (minutes)
    }

    tell_time = String(hours) + ":" + String(minutes) + am_pm
    return tell_time;
}

function date() {
    var tell_date = null;

    var months_name = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    var now = new Date()
    var date_is = now.getDate()
    var month = now.getMonth()
    var year = now.getFullYear()
    var com_date = date_is + " " + months_name[month] + ", " + year

    tell_date = com_date;
    return tell_date;
}