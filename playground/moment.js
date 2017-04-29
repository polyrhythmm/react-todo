var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix())

var timestamp = 1493440659;

var currentMoment = moment.unix(timestamp);

console.log(currentMoment.format('MMMM Do, YYYY @ h:mm A'));
console.log(currentMoment.format('MMMM D, YYYY @ h:mm a'));
