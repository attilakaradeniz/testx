let mousePosition;
let offset = [0,0];
let span;
let isDown = false;


 span = document.createElement("span");
 span.className += "testus";
span.style.position = "absolute";
span.style.left = "470";
span.style.top = "300px";
span.style.width = "100px";
span.style.height = "100px";
span.style.background = "ywellow";
span.style.color = "blue";

document.body.appendChild(span);

span.addEventListener('touchstart', function(e) {
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