var data = {
  facing: 'north',
  // start: false
  angle: 0
};

var car = document.querySelector('img');

document.addEventListener('keydown', function () {
  if (event.key === 'ArrowRight') {
    car.className = 'right';
    data.angle += 90;
  } else if (event.key === 'ArrowLeft') {
    car.className = 'left';
  } else if (event.key === 'ArrowDown') {
    car.className = 'down';
  } else if (event.key === 'ArrowUp') {
    car.className = 'up';
  }
});
