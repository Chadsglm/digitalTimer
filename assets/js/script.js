    
    var hours = 0;
    var minutes = 0;
    var seconds = 0;


setInterval(timer, 1000);

function timer() {
    seconds++;
    if(seconds>59){
        minutes++;
        seconds = 0;
       }
    if(minutes>59){
        hours++;
        minutes = 0;
    }
    if(hours>24){
        hours = 0;
       } 
    
    
    $(".seconds").text(seconds);
    $(".minutes").text(minutes);
    $(".hours").text(hours);
    $(".port").toggle();
}