const newDate = new Date()
// console.log(newDate); // 2024-05-04T04:54:55.405Z
// console.log(newDate.toDateString()); // Sat May 04 2024
// console.log(newDate.toISOString()); // 2024-05-04T04:54:55.405Z
// console.log(newDate.toJSON()); // 2024-05-04T04:54:55.405Z
// console.log(newDate.toString()); // Sat May 04 2024 04:54:55 GMT+0000 (Coordinated Universal Time)
// console.log(newDate.toLocaleString()); // 5/4/2024, 4:54:55 AM
// console.log(typeof newDate); // object

const myDate = new Date(2024, 0, 12) // Month starts from 0
// console.log(myDate.toDateString()); // Fri Jan 12 2024

const myDate2 = new Date(2024, 0, 12, 6, 3, 45) // Year, Month, Date, Hour, Minutes, seconds
// console.log(myDate2.toLocaleString()); // 1/12/2024, 6:03:00 AM

const myDate3 = new Date("2024-03-24") 
const myDate4 = new Date("03-24-2024")


const myTimestamp = Date.now()
// console.log(myTimestamp);
// console.log(myDate.getTime());

// to get seconds
// console.log(Math.floor(Date.now()/1000));

console.log(newDate.toLocaleString('default',{weekday:"long"})); // Saturday








