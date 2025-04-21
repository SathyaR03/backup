// Enum to represent the days of the week
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
// Function to check if the given day is a weekend or a weekday
function checkDayType(day) {
    // Check if the day is either Sunday or Saturday (weekend)
    if (day === DayOfWeek.Sunday || day === DayOfWeek.Saturday) {
        return "".concat(day, " is a weekend.");
    }
    else {
        return "".concat(day, " is a weekday.");
    }
}
// Example usage:
console.log(checkDayType(DayOfWeek.Monday)); // Weekday
console.log(checkDayType(DayOfWeek.Saturday)); // Weekend
console.log(checkDayType(DayOfWeek.Sunday)); // Weekend
console.log(checkDayType(DayOfWeek.Friday)); // Weekday
