const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');
let contextmenu = document.querySelector('.contextmenu')
let size = 6;
let color = '#343a40';
let x;
let y;
let ispresed = false;
let context = false;


//controls



canvas.addEventListener('contextmenu', e => {
    e.preventDefault();
    contextmenu.style.display = "block";
    contextmenu.style.top = y + 'px';
    contextmenu.style.left = x + "px";
    ispresed = false
    context = true
})

canvas.addEventListener('click', () => {
    if (context) {
        contextmenu.style.display = "none";
    }
})

function changecolor(clvalue) {
    color = clvalue

}

function decrease() {
    size = size - 1;
    document.getElementById('size').innerHTML = size;
    document.querySelector('#size2').innerHTML=size;
}
function increase() {
    size = size + 1;
    document.getElementById('size').innerHTML = size;
    document.querySelector('#size2').innerHTML=size;

}

function cls() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  contextmenu.style.display = "none";

    

}

//drawing functions
canvas.addEventListener('mousedown', e => {
    ispresed = true;
    x = e.offsetX;
    y = e.offsetY;

})
canvas.addEventListener('mouseup', e => {
    ispresed = false;
    x = undefined;
    y = undefined;

})
canvas.addEventListener('mousemove', e => {
    if (ispresed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawcircle(x2, y2)
        drwaline(x, y, x2, y2)
        x = x2;
        y = y2
    }

})



function drawcircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2, true)
    ctx.fillStyle = color
    ctx.fill()
}

function drwaline(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}



function download(){
  var link = document.createElement('a');
  link.download = 'canvas.png';
  link.href = document.getElementById('canvas').toDataURL()
  link.click();
  contextmenu.style.display = "none";

}