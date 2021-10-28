let us = document.getElementById('us');


function launchWhenReady() {
    imagesCount --;
    if (imagesCount) return;
    setInterval(animate, 20);
  }


  let shipBadY = 0;

document.addEventListener('touchstart', handleTouchEvent, true);
document.addEventListener('touchmove', handleTouchEvent, true);
document.addEventListener('touchend', handleTouchEvent, true);
document.addEventListener('touchcancel', handleTouchEvent, true);




function handleTouchEvent(e) {
    if (e.touches.length === 0) return;
    e.preventDefault();
    e.stopPropagation();
    let touch = e.touches[0];
    us.style.left = (touch.pageX - us.width / 2) + 'px';
}


// animation loop
function animate() {
    // move ship
    shipBadY += 1;
    shipBad.style.top = Math.ceil(shipBadY) + 'px';
    // test collision
    var isColliding = testCollide(shipBad);
    collisionDisplay.style.display = isColliding ? 'block' : 'none';
}