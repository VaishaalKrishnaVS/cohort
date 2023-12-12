/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  if(transactions.length===0) return [];
  let ans = [];

  let temp ={};
  for(let tran of transactions){
      const cat = tran.category;
      if(temp[cat]) temp[cat]+=tran.price;
      else temp[cat]=tran.price;
  }
  for(let cat in temp){
    ans.push({
      category:cat,
      totalSpent:temp[cat]
    })
  }
  return ans;
}

module.exports = calculateTotalSpentByCategory;
