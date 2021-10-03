const arr = getMinMaxAvg(1, 2)

function getMinMaxAvg(a, b){
 
  let min = Math.min(a, b)
  let Max = Math.max(a, b)
  let Avg = (a + b) / getMinMaxAvg.length
  
var minMaxAvg = ['Minimum = ' + min, ' Maximum = ' + Max, ' Average = ' + Avg]
console.log(minMaxAvg)

let elresult = document.getElementById('result')
elresult.innerHTML = 'The result is ' + minMaxAvg

}