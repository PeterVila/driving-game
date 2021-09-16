var data = {
    facing: 'north',
    // start: false
}

var car = document.querySelector('img')
document.addEventListener('keydown', function(){
    console.log(event.key)
    if (event.key === "ArrowRight"){
        car.className = "right"
        console.log('car turns 90deg')
        data.facing = "east"
    }
})