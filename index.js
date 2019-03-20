var dodger = document.getElementById('dodger')

dodger.style.backgroundColor = "pink"

dodger.style.height = "80px"

dodger.style.width = "100px"

dodger.style.bottom = '0px'

document.addEventListener('keydown', function(e) {
  if (e.which === 37) {
    var leftNumbers = dodger.style.left.replace('px', '')
    var left = parseInt(leftNumbers, 10)
 
    dodger.style.left = `${left - 1}px`
  }
})


