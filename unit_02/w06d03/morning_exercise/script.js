//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  var smallBarrel = 60;
  var largeBarrel = (total - (small * smallBarrel)) / large;

return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
  var earthCir = 24901;
  var gallonsUsed = (fuelPrice * (earthCir / milesPerGallon));

  return gallonsUsed;

};

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(a, b, c, d){
  var totalCostco = a * b;
  var totalKirkland = c * d;
  var juiceTotal = totalCostco + totalKirkland;
  // var totalAmount = 

  return juiceTotal;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
