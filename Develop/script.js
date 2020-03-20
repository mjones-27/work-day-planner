//get time
const currTime = moment().format('MMMM Do YYYY');

console.log(currTime);

// update current time and date
let $dateHeading = $('#currentDay');
$dateHeading.text(currTime);
