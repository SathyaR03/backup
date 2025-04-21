var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["Sunday"] = "Sunday";
    DayOfWeek["Monday"] = "Monday";
    DayOfWeek["Tuesday"] = "Tuesday";
    DayOfWeek["Wednesday"] = "Wednesday";
    DayOfWeek["Thursday"] = "Thursday";
    DayOfWeek["Friday"] = "Friday";
    DayOfWeek["Saturday"] = "Saturday";
})(DayOfWeek || (DayOfWeek = {}));
function checkDay(day) {
    if (Object.values(DayOfWeek).includes(day)) {
        return "".concat(day, " is a valid day of the week.");
    }
    else {
        return "".concat(day, " is not a valid day of the week.");
    }
}
console.log(checkDay('Monday'));
console.log(checkDay('Funday'));
