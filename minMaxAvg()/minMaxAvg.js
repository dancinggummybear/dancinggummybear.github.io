
const arr = getMinMaxAvg(1, 2)

function getMinMaxAvg(a, b){
 
  let min = Math.min(a, b)
  let Max = Math.max(a, b)
  let Avg = (a + b) / getMinMaxAvg.length
  
var minMaxAvg = {min, Max, Avg}
console.log(minMaxAvg)
  
}