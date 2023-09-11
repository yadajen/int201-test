const { template } = require('@babel/core')

function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if (allItems === null || allItems === undefined) return undefined
  if (allItems.length === 0) return []
  if (rowsPerPage <=0 ) return allItems
  if (currentPage <=0 ) return allItems

  const itemsOfCurrentPages = allItems.slice(rowsPerPage*(currentPage-1),rowsPerPage*currentPage)
  return itemsOfCurrentPages.length>0?itemsOfCurrentPages:[]

}
// function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
//   //console.log(allItems)
//   if(allItems===null||allItems===undefined) return undefined
//   const maxPages=Math.ceil(allItems.length/rowsPerPage)
//   //console.log(maxPages)

//   if(allItems.length===0) return []
//   if(rowsPerPage<=0) return allItems
//   if(currentPage<=0) return allItems
  
//   let result=[]
//   let lastPoint=(currentPage-1)*rowsPerPage
//   for (let i = lastPoint; i < currentPage*rowsPerPage; i++) {
//     if(allItems[i]===null|allItems[i]===undefined) continue
//     result[result.length]=allItems[i]
    
//   }
//   return result
// }
module.exports = getItemsOfCurrentPage
