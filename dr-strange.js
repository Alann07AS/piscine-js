const time0 = new Date('0001-01-01')
const dayIndex = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

function addWeek(Date) {
    if (Math.floor((((Date - time0)/1000/60/60/24)/7))%2 == 0) {
        return dayIndex[Date.getDay()]
    } else {
        return 'second' + dayIndex[Date.getDay()]
    }
}

function timeTravel(ObjTime) {
    return new Date(ObjTime.date.setHours(ObjTime.hour, ObjTime.minute, ObjTime.second))
}

console.log(timeTravel({
    date: new Date('2020-05-29 23:25:22'),
    hour: 21,
    minute: 22,
    second: 22,
    }));

// let d = new Date('0001-01-01')

console.log( addWeek(new Date('0001-01-01'))) // === 'Monday' );
console.log( addWeek(new Date('0001-01-02'))) // === 'Tuesday' );
console.log( addWeek(new Date('0001-01-03'))) // === 'Wednesday' );
console.log( addWeek(new Date('0001-01-04'))) // === 'Thursday' );
console.log( addWeek(new Date('0001-01-05'))) // === 'Friday' );
console.log( addWeek(new Date('0001-01-06'))) // === 'Saturday' );
console.log( addWeek(new Date('0001-01-07'))) // === 'Sunday' );
console.log( addWeek(new Date('0001-01-08'))) // === 'secondMonday' );
console.log( addWeek(new Date('0001-01-09'))) // === 'secondTuesday' );
console.log( addWeek(new Date('0001-01-10'))) // === 'secondWednesday' );
console.log( addWeek(new Date('0001-01-11'))) // === 'secondThursday' );
console.log( addWeek(new Date('0001-01-12'))) // === 'secondFriday' );
console.log( addWeek(new Date('0001-01-13'))) // === 'secondSaturday' );
console.log( addWeek(new Date('0001-01-14'))) // === 'secondSunday' );


console.log( addWeek(new Date('2025-08-11'))); // === 'secondMonday')
console.log( addWeek(new Date('2001-05-11'))); // === 'secondFriday')
console.log( addWeek(new Date('2001-11-07'))); // === 'secondWednesday')
console.log( addWeek(new Date('0001-12-01'))); // === 'secondSaturday')
console.log( addWeek(new Date('1664-08-09'))); // === 'Saturday')
console.log( addWeek(new Date('1995-11-07'))); // === 'Tuesday')
console.log( addWeek(new Date('2020-01-01'))); // === 'Wednesday')
console.log( addWeek(new Date('2048-12-07'))); // === 'Monday')

