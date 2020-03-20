// set variables
//get time
const currDay = moment().format('MMMM Do YYYY');
var currHour  = moment().format("H");

console.log(currDay);
console.log(currHour);

var $timeBlocks = $(".time-block");



// update current time and date
let dateHeading = $('#currentDay');
dateHeading.text(currDay);

//set colors in timeblocks to past, present or future based on time
function timeblockInit(){
    $timeBlocks.each(function(){
        var $thisBlock = $(this);
        var thisBlockHr = parseInt($thisBlock.attr("data-hour"));
        // $thisBlock.addClass("future");

        // console.log(thisBlockHr);
        // console.log(currHour);
        if (thisBlockHr < currHour) {
            $thisBlock.addClass("past");
        } else if (thisBlockHr > currHour) {
            $thisBlock.addClass("future");
        } else {
            $thisBlock.addClass("present");
        }
    })
}

// save scheduled data on save button press
function storeAppt(){
    var $thisBlock = $(this).parent();
    var hourData = $(this).parent().attr("data-hour");
    var apptData = $(this).parent().children("textarea").val();

    console.log(hourData);
    console.log(apptData);
}

// $saveBtn.on("click", "button", storeAppt);


timeblockInit();

// fill saved timeblocks with saved data