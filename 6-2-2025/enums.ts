enum DayOfWeek {
    Sunday = 'Sunday',
    Monday = 'Monday',
    Tuesday = 'Tuesday',
    Wednesday = 'Wednesday',
    Thursday = 'Thursday',
    Friday = 'Friday',
    Saturday = 'Saturday'
}

function checkDayType(day: DayOfWeek): string {
    if (day === DayOfWeek.Sunday || day === DayOfWeek.Saturday) {
        return `${day} is a weekend.`;
    } else {
        return `${day} is a weekday.`;
    }
}

console.log(checkDayType(DayOfWeek.Monday));  
console.log(checkDayType(DayOfWeek.Saturday));  
console.log(checkDayType(DayOfWeek.Sunday));    
console.log(checkDayType(DayOfWeek.Friday));    
