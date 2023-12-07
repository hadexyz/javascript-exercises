const removeFromArray = function(arr, ...parameters) {
   let finalarr = arr
   for (const arg of parameters) {
    const index = finalarr.indexOf(arg)
    if (index != -1 ) {
        arr.splice(index,1)
    }
   } 
   return finalarr
};

// Do not edit below this line
module.exports = removeFromArray;