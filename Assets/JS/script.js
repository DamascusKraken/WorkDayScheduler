// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var time = dayjs();
  var currentDate = time.format('dddd, MMMM D[th]');
  console.log(currentDate);
  $('#currentDay').text(currentDate);

  var currentTime = time.format('HH');
 console.log(currentTime);
  
  
    
  for (var i = 9; i <13; i++)
  {
    var index = localStorage.getItem("hour-" + i);
    var indexSelector = "#hour-" + i;
    console.log(indexSelector);
    var testTime1 = i  ;
    testTime1 = String(time.hour(testTime1).format('HH'));
        console.log(testTime1);
    if(testTime1 == currentTime){
       var currentBlk = $(indexSelector).removeAttr("class");
        console.log("this is the present block");
        currentBlk.addClass("row time-block present");
        
    } else if(currentTime > testTime1){
      console.log("this is the past blcok");
      console.log("this is the test time " +testTime1);
     
      var currentBlk = $(indexSelector).removeAttr("class");
        currentBlk.addClass("row time-block past");
        
        
    } else {
      console.log("this is the future blcok");
      var currentBlk = $(indexSelector).removeAttr("class");
        currentBlk.addClass("row time-block future");
    }
  

  var userInput =  localStorage.getItem("hour-" + i + " text");

  $("#"+index).children().eq(1).text(userInput);
  }
  // if( currentTime.isAfter())
  for (var i = 1; i <6; i++)
    {
      var index = localStorage.getItem("hour-" + i);
    var indexSelector = "#hour-" + i;
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
    
     
    var userInput =  localStorage.getItem("hour-" + i + " text");
    
    
    $("#"+index).children().eq(1).text(userInput);
    }
    
  
  
  
var description = $('.description');
var saveBtn = $('.saveBtn');

saveBtn.click( function(){
  
  var index = $(this).parent().attr('id'); 
  
    
  var userInput = $(this).siblings('.description').val();
    

    localStorage.setItem(index, index);
    localStorage.setItem(index+" text" , userInput);
});


$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
});
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  

