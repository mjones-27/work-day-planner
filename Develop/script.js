// set variables
//get time
const currDay = moment().format('MMMM Do YYYY');

console.log(currDay);

var $timeBlocks = $(".time-block");

// draw variables on page

// update current time and date
let $dateHeading = $('#currentDay');
$dateHeading.text(currDay);

//update colors in timeblocks based on current time
function timeblockInit(){
    $timeBlocks.each(function(){
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));

        $thisBlock.addClass("past");


    })
}

// draw empty timeblocks (to erase non-saved data)

// fill saved timeblocks with saved data

timeblockInit();
