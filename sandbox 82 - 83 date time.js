// dates
const now = new Date();

console.log(now);
console.log('typeof now is', typeof now);

console.log('getFullYear', now.getFullYear());
console.log('getMonth', now.getMonth()); // jan - 0, feb - 1...
console.log('getDate', now.getDate());
console.log('getDay', now.getDay()); // sun - 0, mon - 1...
console.log('getHours', now.getHours());
console.log('getMinutes', now.getMinutes());
console.log('getSeconds', now.getSeconds());

// date strings
console.log('toDateString', now.toDateString());
console.log('toTimeString', now.toTimeString());
console.log('toLocaleString', now.toLocaleString());

// timestamps
// The getTime() method returns the number of milliseconds* since the Unix Epoch (00:00:00 UTC on 1 January 1970)
console.log('timestamp', now.getTime());

const before = new Date('February 1 2019 7:30:59');

console.log('now.getTime(), before.getTime()', now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();

console.log('diff', diff);

// div by 1000, bc 1000 milliseconds in a second
// div by 60, bc 60 seconds in a minute
const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log('diff in minutes, hours, days', mins, hours, days);
console.log(`The blog was written ${days} ago`);

// converting timestamps to date objects
const timestamp = 1549006259000;
console.log('converting timestamps to date objects', new Date(timestamp));
