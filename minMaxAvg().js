const arr = getMinMaxAvg(1, 2)

function getMinMaxAvg(a, b){
 
  let min = Math.min(a, b)
  let Max = Math.max(a, b)
  let Avg = (a + b) / getMinMaxAvg.length
  
var minMaxAvg = ['Minimum is ' + min, 'Maximum is ' + Max, 'Average is ' + Avg]
console.log (minMaxAvg)

}