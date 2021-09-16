var data = {
  facing: 'north',
  // start: false
  angle: 0

};

var car = document.querySelector('img');

document.addEventListener('keydown', function () {
  if (event.key === 'ArrowRight') {
    car.className = 'right';
    data.facing = "east"
  } else if (event.key === 'ArrowLeft') {
    car.className = 'left';
    data.facing = "west"
  } else if (event.key === 'ArrowDown') {
    if (data.facing === "west"){
        car.className = 'down-alternate'
    } else {
        car.className = 'down';
    }
    data.facing = "south"
  } else if (event.key === 'ArrowUp') {
    car.className = 'up';
    data.facing = "north"
  }
  console.log(data)
    data.angle += 90;
  } else if (event.key === 'ArrowLeft') {
    car.className = 'left';
  } else if (event.key === 'ArrowDown') {
    car.className = 'down';
  } else if (event.key === 'ArrowUp') {
    car.className = 'up';
  }
});
