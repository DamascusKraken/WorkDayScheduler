//creates a dayjs object
var time = dayjs();
//creates a date and formatting for header
var currentDate = time.format('dddd, MMMM D[th]');
//creates a jquery object and modifies the desired text
$('#currentDay').text(currentDate);
//variable to use to compare the current time with the time containers in the planner
var currentTime = time.format('HH');

//For Loop display possible localStorage data and check time for color assignments
for (var i = 9; i <13; i++)
{ //variable to store the key for the saved userInput in localStorage
  var userInput =  localStorage.getItem("hour-" + i + " text");
  //Variable to loop thru the container id's
  var indexSelector = "#hour-" + i;
  //Change the desired text to the userInput from the localStorage
  $(indexSelector).children().eq(1).text(userInput);
  
  //Variable to change with the loop and also convert using Day.js to 24 hr clock
  var testTime1 = i  ;
  //converting time to 24 hr clock and then string to use to compare for color assignments.
  testTime1 = String(time.hour(testTime1).format('HH'));
    //If statment block to assign color assignments.
    if(testTime1 == currentTime){
        //jquery object creation to change bootstrap attributes
        var currentBlk = $(indexSelector).removeAttr("class");
        //change bootstrap attributes
        currentBlk.addClass("row time-block present");
        
    } else if(currentTime > testTime1){
         //jquery object creation to change bootstrap attributes
        var currentBlk = $(indexSelector).removeAttr("class");
        //change bootstrap attributes
        currentBlk.addClass("row time-block past");
        
        
    } else {
        //jquery object creation to change bootstrap attributes
        var currentBlk = $(indexSelector).removeAttr("class");
        //change bootstrap attributes
        currentBlk.addClass("row time-block future");
    }



}
//For Loop display possible localStorage data and check time for color assignments
for (var i = 1; i <6; i++)
  {

  var indexSelector = "#hour-" + i;
  var userInput =  localStorage.getItem("hour-" + i + " text");
  $(indexSelector).children().eq(1).text(userInput);

  var testTime1 = i + 12 ;
  testTime1 = String(time.hour(testTime1).format('HH'));
      console.log(testTime1);
    if(testTime1 == currentTime){
      var currentBlk = $(indexSelector).removeAttr("class");
      currentBlk.addClass("row time-block present");
        
    } else if (testTime1 > currentTime){
      var currentBlk = $(indexSelector).removeAttr("class");
      currentBlk.addClass("row time-block future");
        
    } else if(testTime1 < currentTime){
      var currentBlk = $(indexSelector).removeAttr("class");
      currentBlk.addClass("row time-block past");
        
    }
  }
  
//jQUERY object for the savebtn
var saveBtn = $('.saveBtn');
  //Event Handler for click on saveBtn
  saveBtn.click( function(){
    //Jquery object to store the id to use as the key for the userInput in localStorage
  var index = $(this).parent().attr('id'); 
  //Jquery object to store the userInput text
  var userInput = $(this).siblings('.description').val();
  //Stores the userInput under the 'key' of the id of the textblock
  localStorage.setItem(index+" text" , userInput);
});