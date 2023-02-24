//Set the date we're counting down to
var countDownDate = new Date("March 23, 2023").getTime();

//Update the count down every 1 second
function setInterval() {
    
    //Get today's Date
    var now = new Date().getTime();

    //Find distance between now and countdown date
    var distance = countDownDate - now;

    //Time calculations for days, hours, mins, and secs
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 *24)) / 1000 * 60 * 60)
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "D " + hours + "h " + minutes + "m " + seconds + "s ";

    //if the count down is finished, write some text
    if (distance < 0){
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
} 

setInterval(1000);
