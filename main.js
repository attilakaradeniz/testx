let mousePosition;
let offset = [0,0];
let span;
let isDown = false;
let photoArray = [0, 1, 2, 3];
let photoCounter = 0;
let photoString = "";
 span = document.createElement("span");
 span.className += "testus";
span.style.position = "absolute";
span.style.left = "890";
span.style.top = "600px";
span.style.width = "100px";
span.style.height = "100px";
span.style.background = "ywellow";
span.style.color = "blue";

document.body.appendChild(span);

span.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        span.offsetLeft - e.clientX,
        span.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        span.style.left = (mousePosition.x + offset[0]) + 'px';
        span.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);

let myFunc;
function iterate() {
    photoCounter = 0;
    clearInterval(myFunc);
    myFunc = setInterval(changeImage, 300);
}

function changeImage() {
   
    photoCounter = getRandomInt(2, 20);
    photoCounter++;
    photoString = `./img/${photoCounter}.jpg`;
    document.getElementById("photo").src=photoString;
      

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min +1));
}



