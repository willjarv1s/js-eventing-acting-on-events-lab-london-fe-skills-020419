var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "pink"

dodger.style.height = "80px"

dodger.style.width = "100px"

dodger.style.bottom = '0px'

function moveDodgerLeft() {
  var leftNumbers = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumbers, 10)
 
  if (left > 0) {
    dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    moveDodgerLeft()
  }
})
