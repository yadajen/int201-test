const { template } = require('@babel/core')

  function countPosNegValue(posNegIntegerArray) {
    if (posNegIntegerArray === null || posNegIntegerArray === undefined) return undefined
    else if (posNegIntegerArray.length === 0) return {}
    
    let len = posNegIntegerArray.length;
    let positiveCount = 0;
    let negativeCount = 0;
    
    for(let i = 0; i < len; i++)
    {
        if (posNegIntegerArray[i] > 0) positiveCount++;
        else if (posNegIntegerArray[i] < 0) negativeCount++;
    }
    
    const count = {};
    if (positiveCount >= 0) count["positive"] = positiveCount;
    if (negativeCount >= 0) count["negative"] = negativeCount;
    return count;
}
// function countPosNegValue(posNegIntegerArray) {
//     if(posNegIntegerArray===null||posNegIntegerArray===undefined) return undefined
//     if(posNegIntegerArray.length === 0) return {}
//     let Integer = {positive: 0, negative: 0}
//     for (let i = 0; i < posNegIntegerArray.length; i++) {
//       if(posNegIntegerArray[i]>0) Integer["positive"]++
//       else if(posNegIntegerArray[i]<0) Integer.negative++
//     }
//     return Integer
// }
module.exports = countPosNegValue
