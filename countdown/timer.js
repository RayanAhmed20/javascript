let sc=document.getElementById('sc')
let mn=document.getElementById('mn')
let hr=document.getElementById('hr')
let yr=document.getElementById('yr')

var dest = new Date("jan 1, 2050 12:00:00").getTime();
var time = document.getElementById('countdown');
setInterval(() => {
    var now = new Date().getTime();
    var diff = dest - now;
    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    var secounds = Math.floor((diff % (1000 * 60)) / 1000);
    if (hours == 0) {
        hours = 00;
    } if (minutes == 0) {
        minutes = 00;
    } if (days == 0) {
        days = "";
    } else if (days > 365) {
        days = Math.floor(days / 365 )+ " years "

    } else {
        days = days + " Days ";
    }
    time.innerHTML = days + "" + hours + "  Hours " + minutes + " Minutes" + " " + secounds + " Secounds";




   sc.style.width=secounds*8.33+"px";
   mn.style.width=minutes*8.33+"px";
   hr.style.width=hours*8.33+"px";
   let left=days.slice(0,2);
    yr.style.width=left *17.23+"px";
}, 1000)
