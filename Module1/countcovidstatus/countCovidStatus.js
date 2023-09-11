const { template } = require('@babel/core')


function countCovidStatus(covidStatusArray) {
  if (covidStatusArray === null || covidStatusArray === undefined){
    return undefined;
  } else if (covidStatusArray.length === 0) {
    return {};
  }
  let negLow = 0;
  let negHigh = 0;
  let pos = 0;
  for (const status of covidStatusArray) {
    switch (status) {
      case "negative and low risk":
        negLow++;
        break;
      case "negative and high risk":
        negHigh++;
        break;
      case "positive":
        pos++;
        break;
    }
  }
  // build object
  const covidStatus = {};
  if (negLow > 0) covidStatus["negative and low risk"] = negLow;
  if (negHigh > 0) covidStatus["negative and high risk"] = negHigh;
  if (pos > 0) covidStatus["positive"] = pos;
  return covidStatus;
}

// function countCovidStatus(covidStatusArray) {
//   if(covidStatusArray===null||covidStatusArray===undefined){
//     return undefined
//   }
//   if(covidStatusArray.length === 0){
//     return {}
//   }
//   const obj = {}
//   let low=0,high=0,pos=0
//   for (let i = 0; i < covidStatusArray.length; i++) {
//     if (covidStatusArray[i]==="negative and low risk") {
//       low++//obj['nga]++
//     }else if (covidStatusArray[i]==="negative and high risk") {
//       high++
//     }else if (covidStatusArray[i]==="positive"){
//       pos++
//     }
//   }

//   if(low>0) obj["negative and low risk"]=low
//   if(high>0) obj["negative and high risk"]=high
//   if(pos>0) obj["positive"]=pos
  
//   return(obj)
// }
module.exports = countCovidStatus
